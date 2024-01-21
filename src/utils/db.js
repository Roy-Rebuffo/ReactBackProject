const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const {name, host} = db.connection;
        console.log(`Connected to ${name} in host:${host}`)
    } catch (error) {
        console.log("error conectando a la BBDD", error);
    }
}

module.exports = {connect}