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
router.get("/embaixadores", mailer.sendEmail);

app.use(router);

const port = process.env.PORT || 3333;

app.listen(port);
