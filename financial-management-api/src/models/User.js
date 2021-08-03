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

  static getUserById(id) {
    let connection = this.connection();
    if (Utilities.isIdValid(id)) {
      let sql = `SELECT * FROM USERS WHERE ID = ${id}`;
      connection.query(sql, (error, result, fields) => {
        if (error) throw error;
        return result;
      });
    }
  }
}

module.exports = User;
