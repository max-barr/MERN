const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}));

require("./config/mongoose.config");
require("./routes/pet.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
