const express = require('express');
const cors = require('cors');
const PORT = 5000;
const connectdb = require("./mongodb");
const todoRoute = require("./routes/todoRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", todoRoute);

connectdb();



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})