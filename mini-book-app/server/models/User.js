const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserShema = ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("User", UserShema);``