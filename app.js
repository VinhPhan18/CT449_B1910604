const express = require("express");
const cors = require("cors");
const contactsRouter = this.require("./app/routes/contact.route");
const ApiError = require("./app/api-error");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use((req, res, net) => {
    return next(new ApiError(404, "Resource not found"));
});

app.get("/", (req, res)=>{
    res.json({ message: " Welcome to contact book application."
});
});
app.use("/api/contacts", contactsRouter);
app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal serveer Error",
    });
});
module.exports = app;