const mysql = require('mysql2'); 
 const db = mysql.createConnection({    
    host: 'localhost',     
    user: 'root',     
    password: '12345678',     
    database: 'usuarios', 
});

db.connect((error) => {
    if (error) {
        console.error('Error conectando a la base de datos MySQL:', error);
    } else {
        console.log('¡Conexión exitosa a la base de datos MySQL!');
    }
});

module.exports = db.promise();  