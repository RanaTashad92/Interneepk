const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://tashadrana224:tarijrana11@cluster0.wpgfgex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "dasda3245fgdg[[]sdade344454351231()=ifnmsdadliweqcdq";
mongoose.connect(mongoUrl).then(() => {
    console.log("Database connected")

}).catch((e) => {

    console.log(e);
});

require('./UserDetails');
const User = mongoose.model("UserInfo");
app.get("/", (req, res) => {
    res.send({ status: "Started" })
});

app.post('/register', async (req, res) => {

    const { name, email, mobile, password } = req.body;
    const oldUser = await User.findOne({ email: email })
    if (oldUser) {
        return res.send({ data: "User already exists!" })
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({
            name: name,
            email: email,
            mobile: mobile,
            password: encryptedPassword,
        });
        res.send({ status: "ok", data: "User Created" });
    } catch (error) {
        res.send({ status: "error", data: error });
    }
});

app.listen(3000, () => {
    console.log("Node js server started");
});
app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const olduser = await User.findOne({ email: email });
    if (!olduser) {
        return res.send({ data: "User does not exist!" })
    }
    if (await bcrypt.compare(password, olduser.password)) {
        const token = jwt.sign({ email: olduser.email }, JWT_SECRET);
        if (res.status(201)) {
            return res.send({ status: "ok", data: token })
        } else {
            return res.send({ error: "error" });
        }
    }
});