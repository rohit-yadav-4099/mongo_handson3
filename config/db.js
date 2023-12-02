const mongoose = require("mongoose")
mongoose.set("strictQuery",true)
const cloudURL = "mongodb+srv://rohityadav4099:rohit2194@cluster0.ltpukis.mongodb.net/?retryWrites=true&w=majority"


const connection = async () => {
    try {
        await mongoose.connect(cloudURL);
        console.log("DB connection done successfully !!");
    }

    catch(err) {
        console.log("`Error occured DB connection",err);
    }
}

module.exports = connection