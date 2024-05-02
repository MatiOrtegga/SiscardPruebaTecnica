import { Router } from "express";
import UserController from "../Controllers/UsersController";

const router = Router();
const userController = new UserController();

router.get("/users/:getNewUsers", userController.GetUsers);
router.get("/user/:id", userController.GetUser);

export default router;
