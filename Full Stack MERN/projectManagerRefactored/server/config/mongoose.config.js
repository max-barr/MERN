const mongoose = require("mongoose");
const dbName = "product_manager_refactored"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log(`Connected to ${dbName} database`)})
.catch((err) => {console.log(err)});