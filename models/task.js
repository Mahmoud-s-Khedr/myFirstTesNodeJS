const db = require("../config/db");
class taskModel {

    static async getTasks() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM task", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async addTask(title) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO task (title) VALUES (?)", [title], (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async deleteTask(id) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM task WHERE id = ?", [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async updateTask(id, title) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE task SET title = ? WHERE id = ?", [title, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }


}

module.exports = taskModel;