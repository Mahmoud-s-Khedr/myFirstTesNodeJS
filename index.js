const express = require("express");
const mydb = require("./config/db");
const rout = require("./routes/router");
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(rout);
app.use(express.static("veiws"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/veiws/index.html");
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
});

