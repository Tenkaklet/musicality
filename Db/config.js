const mongoose = require('mongoose');


const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://maximus:3nku7sat@musicality.azsbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to Db');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connect;