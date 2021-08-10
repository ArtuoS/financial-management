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

  static getAll(callback) {
    let connection = this.connection();
    let sql = `SELECT * FROM USERS`;
    connection.query(sql, (error, result, fileds) => {
      if (error) throw error;
      callback(result);
    });

    connection.end();
  }

  static getById(id, callback) {
    let connection = this.connection();
    if (Utilities.isIdValid(id)) {
      let sql = `SELECT * FROM USERS WHERE ID = ${id}`;

      connection.query(sql, (error, result) => {
        if (error) throw error;
        callback(result);
      });
    }
    connection.end();
  }

  static create(user, callback) {
    let connection = this.connection();
    let sql = `INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, SALARY) VALUES ("${user.first_name}", "${user.last_name}", "${user.email}", "${user.password}", ${user.salary})`;
    console.log(sql);
    connection.query(sql, (error, result) => {
      if (error) throw error;
      callback(result);
    });

    connection.end();
  }

  static update(id, userUpdatedValues, callback) {
    let connection = this.connection();
    let sql = `UPDATE USERS SET ? WHERE ID = ${id}`;
    connection.query(sql, [userUpdatedValues], (error, result) => {
      if (error) throw error;
      callback(result);
    });
  }

  static delete(id, callback) {
    let connection = this.connection();
    let sql = `DELETE FROM USERS WHERE ID = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
      callback(result);
    });
  }
}

module.exports = User;
