const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const customerRoutes = require("./routes/customerRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/customers",customerRoutes)

app.listen(5000,()=>console.log("Server running"))