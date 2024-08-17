const taskModel = require("../models/task");
class taskCtrl {
    static async getTasks(req, res) {
        const tasks = await taskModel.getTasks();
        res.send(tasks);
    }

    static async addTask(req, res) {
        console.log(req.body);
        console.log(req.body.title);
        const result = await taskModel.addTask(req.body.title);
        res.send(result);
    }

    static async deleteTask(req, res) {
        const result = await taskModel.deleteTask(req.body.id);
        res.send(result);
    }

    static async updateTask(req, res) {
        const result = await taskModel.updateTask(req.body.id, req.body.title);
        res.send(result);
    }
    
}

module.exports = taskCtrl;