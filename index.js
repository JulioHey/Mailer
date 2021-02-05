dotenv = require("dotenv")

const cors = require("cors");
const express = require("express");

dotenv.config();

const Mailer = require("./src/controllers/email.controller");


const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

const mailer = new Mailer();


router.get("/", (req, res) => {
    return res.send("HEllo")
})
router.post("/embaixadores", mailer.sendEmail);

app.use(router);

let port;
if (process.env.PORT) {
    port = process.env.PORT;
} else {
    port = 3333;
};

app.listen(port, ()=> {
    console.log(`App is listening on prot ${port}`)
});
