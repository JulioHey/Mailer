const cors = require("cors");
const express = require("express");

const Mailer = require("./controllers/email.controller");


const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

const mailer = new Mailer();

router.get("/embaixadores", mailer.sendEmail);

app.use(router);

app.listen(80);
