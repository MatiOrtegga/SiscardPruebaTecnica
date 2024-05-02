"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../Controllers/UsersController"));
const router = (0, express_1.Router)();
const userController = new UsersController_1.default();
router.get("/users/:getNewUsers", userController.GetUsers);
router.get("/user/:id", userController.GetUser);
exports.default = router;
