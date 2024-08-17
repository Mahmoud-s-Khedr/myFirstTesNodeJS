const express = require("express");
const router = require("express").Router();
const taskCtrl = require("../controller/taskctrl");

router.get("/showtasks", taskCtrl.getTasks);

router.post("/addtask", taskCtrl.addTask);

router.delete("/deletetask", taskCtrl.deleteTask);

router.put("/updatetask", taskCtrl.updateTask);

module.exports = router;
