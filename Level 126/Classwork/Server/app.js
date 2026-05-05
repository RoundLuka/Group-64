const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/authRouter");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use("/root/auth", authRouter)



app.listen(3000, () => console.log("Server is running and listening port 3000"))