const User = require("../models/User");

const signUp = async (req, res, next) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await User.findOne({ email: email })

        if (check) {
            res.json(false) // "User already exits 💨"
        } else {
            res.json(true) // "User created 💚"
            await User.create(data);
        }
    } catch (e) {
        console.error(e);
        res.json(false) // "fail 😥"
    }
}

const signIn = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const check = await User.findOne({ email: email })

        if (check) {
            // Check the password here if needed
            if (password == check.password) {

                res.json(true) // "logged in 💚"
            }
            else {
                res.json(false) // "Invalid email or password 💨"
            }
        }
        else {
            res.json(false) // "User Not Eixst 💨"
        }

    } catch (e) {
        console.error(e);
        res.json(false) // "fail 😥"
    }
}

module.exports = {
    signUp,
    signIn
}
