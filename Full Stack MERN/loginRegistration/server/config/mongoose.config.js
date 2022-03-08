const mongoose = require("mongoose");
const dbName = "login_reg_practice_db";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log(`Connected to database: ${dbName}`)})
.catch((err) => {console.log(err)});