const Utilities = require("../utils/Utilities");
const mySql = require("mysql");

class User {
  static connection() {
    var connection = mySql.createConnection({
      host: "localhost",
      user: "root",
      database: "FinancialManagement",
    });

    connection.connect();
    return connection;
  }

  static getUserById(id, callback) {
    let connection = this.connection();
    if (Utilities.isIdValid(id)) {
      let sql = `SELECT * FROM USERS WHERE ID = ${id}`;

      connection.query(sql, (error, result, fields) => {
        if (error) throw error;
        callback(result);
      });
    }
    connection.end();
  }

  static createUser(user) {
    let connection = this.connection();
    let sql = `INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, SALARY) VALUES (${user.FIRST_NAME}, ${user.LAST_NAME}, ${user.EMAIL}, ${user.PASSWORD}, ${user.SALARY})`;

    connection.query(sql, (error, result, fields) => {
      if (error) throw error;
      callback(result);
    });

    connection.end();
  }
}

module.exports = User;
