const db = require('../config/config');

let auth = (req, res) => {
    const {email, pasword} = req.body;
    //console.log('Email: ' + email +'\n' + 'Password: ' + pasword);
    const sql = 'SELECT * FROM registroUsuarios WHERE email = ? AND pasword = ?';

    db.execute(sql, [email, pasword], (err, result) => {
        if (err) {
            console.error("Error al obtener datos", err.message);
            res.status(500).send('Error al obtener datos de la base de datos');
        } else {
            res.status(200).json(result);
        }
    });
    //return res.status(200).json({status: 'Succesful authentication'});
}

module.exports = auth;
