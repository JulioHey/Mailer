import { 
    Request,
    Response
} from 'express';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

interface emailOptionsProps {
    from: string;
    to: string;
    subject: string;
    text?: string;
}

interface textProps {
    name: string;
    email: string;
    cell: string;
    church: string;
    city: string;
    mission: string;
    why: string;
}

export class Mailer {
    transporter: Mail
    emailOptions: emailOptionsProps

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'embaixadores.amem@gmail.com',
                pass: 'amemembaixadores'
            }
            })
        
        this.emailOptions = {
            from: 'embaixadores.amem@gmail.com',
            to: 'embaixadores.amem@gmail.com',
            subject: "Novo cadastro de embaixador",
        }

    }

    sendEmail= async(request: Request, response: Response) => {
        try {
            const unformattedText: textProps = request.body;

            const text = `Nome: ${unformattedText.name}
            Email: ${unformattedText.email}
            Telefone: ${unformattedText.cell}
            Igreja: ${unformattedText.church}
            Cidade: ${unformattedText.city}
            Missão: ${unformattedText.mission}
            Porque: ${unformattedText.why}
            `;

            this.emailOptions.text = text;

            this.transporter.sendMail(this.emailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return response.status(200).json({
                        message: "Success"
                    });
                }
            });

        } catch(error) {
            console.log(error)
            return response.status(200).json({
                message: "Error"
            });
        }
    }
}