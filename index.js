const express = require('express');
const mysql = require('mysql');
// const dotenv = require('dotenv');
require('dotenv').config();
// import cors from "cors";
// import fileUpload from "express-fileupload";

const authRoute = require('./routes/auth.js')
// import postsRoute from "./routes/posts.js"
// import commentsRoute from "./routes/comments.js"

const app = express()
// dotenv.config()



//middlewares
// app.use(cors())
// app.use(fileUpload())
app.use(express.json())
// app.use(express.static('uploads'))

//Routes
app.use('/api/auth', authRoute)
// app.use('/api/posts', postsRoute)
// app.use('/api/comments', commentsRoute)

app.get('/', (req, res) => {
    res.send('hello world')
  })
app.listen(3002, () => {
    console.log(`Server started on port 3002`)
})
// let connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DB_NAME
// });

// connection.connect(err => {
//     if (err) {
//         console.log(err)
//         return err
//     } else {
//         console.log('Connected')
//     }
// });

// let query = {sql: 'SELECT * FROM secret.users INNER JOIN secret.role ON secret.users.role = secret.role.idRole INNER JOIN secret.casa ON secret.users.casaId = secret.casa.idCasa', nestTables: true}
// connection.query(query, (err, res)=>{    
//     console.log(err)
//     console.log(res)
    
// })
        // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.oei8ool.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        // app.listen(PORT, () => {
        //     console.log(`Server started on port ${PORT}`)
        // })

// connection.end(err=>{
//     if (err) {
//         console.log(err)
//         return err
//     } else {
//         console.log('disconected')
//     }
// })
