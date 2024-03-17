const db = require('../config/config');

let register = (req, res) => {
    const {email, pasword, nombre, lastName, phoneNumber} = req.body;
    //console.log(email, pasword, nombre, lastName, phoneNumber);

    const sql = 'INSERT INTO registroUsuarios (email, pasword, nombre, lastName, phoneNumber) VALUES (?,?,?,?,?)';
    const values = [email, pasword, nombre, lastName, phoneNumber];
    db.execute(sql, values, (err, result) => {
        if (err) {
            console.error("Error al insertar datos", err.message);
            return res.status(500).send('Error al insertar datos en la base de datos');
        } else {
            return res.status(201).json({ status: 'Registro exitoso' });
        }
    });
    /*eturn res.status(201).send({status: 'register ok'});*/
}

module.exports = register;