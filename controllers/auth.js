const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mysql = require('mysql');

//Register
const register = async (req, res) => {
    // try {
    //     const { userName, password } = req.body

    //     const isUsed = await User.findOne({ userName })
    //     if (isUsed) {
    //         return res.json({ message: 'Таке імя вже зайнято' })
    //     }
    //     const salt = bcrypt.genSaltSync(10)
    //     const hash = bcrypt.hashSync(password, salt)

    //     const newUser = new User({
    //         userName,
    //         password: hash
    //     })

    //     const token = jwt.sign({
    //         id: newUser._id,
    //     }, process.env.JWT_SECRET, { expiresIn: '30d' })

    //     await newUser.save()

    //     return res.json({
    //         newUser,
    //         token,
    //         message: 'Реєстрація пройшла успішно',
    //     })
    // } catch (error) {
    //     return res.json({
    //         error,
    //         message: "Помилка при реєстрації"
    //     })
    // }
}

//Login
const login = async (req, res) => {
    // try {
    //     const { userName, password } = req.body
    //     const user = await User.findOne({ userName })
    //     if (!user) {
    //         return res.json({ message: 'Такого користувача не існує' })
    //     }

    //     const isPasswordCorrect = await bcrypt.compare(password, user.password)
    //     if (!isPasswordCorrect) {
    //         return res.json({ message: 'Не правильний пароль' })
    //     }
    //     const token = jwt.sign({
    //         id: user._id,
    //     }, process.env.JWT_SECRET, { expiresIn: '30d' })

    //     return res.json({ token, user, message: 'Ви ввійшли в систему' })
    // } catch (error) {
    //     return res.json({
    //         error,
    //         message: "Помилка при авторизаціїї"
    //     })
    // }
}
//Get me
const getMe = async (req, response) => {
    try {
        console.log('kekushka')
        let connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB_NAME
        });

        await connection.connect(err => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log('Connected')
            }
        });

        let query = { sql: 'SELECT * FROM secret.users INNER JOIN secret.role ON secret.users.role = secret.role.idRole INNER JOIN secret.casa ON secret.users.casaId = secret.casa.idCasa', nestTables: true }
        await connection.query(query, (err, res) => {
            console.log(err)
            console.log(res)
            return response.json({ res })
        })
        connection.end(err => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log('disconected')
            }
        })
        
    } catch (error) {
        return res.json({ message: 'Немає доступу controller' })
    }
}

exports.register = register
exports.login = login
exports.getMe = getMe