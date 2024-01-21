const mysql = require('mysql2');

class DbConnection {
  conn;

  constructor() {
    // create a new MySQL connection
    this.conn = mysql.createConnection({
      host: 'sql12.freemysqlhosting.net',
      user: 'sql12678551',
      password: '3391dNkQuK',
      database: 'sql12678551'
    });

    // connect to the MySQL database
    this.conn.connect((error) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
      }
    });
  }
}



// close the MySQL connection
// connection.end();

export default DbConnection;