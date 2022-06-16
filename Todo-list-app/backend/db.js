const mongoose = require('mongoose');


const dbURl='mongodb://localhost:27017/TodoListV01'


mongoose.connect(dbURl)

//  Extra


const db=mongoose.connection;

db.on('error',(err) => {
    console.log('ERROR in MongoDB')
});

db.on('connected', (err) => {
    console.log(' MongoDB is Connected');
});