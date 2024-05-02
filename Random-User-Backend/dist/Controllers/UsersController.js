"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = __importDefault(require("../services/UserServices"));
class UserController {
    constructor() {
        this.userServices = new UserServices_1.default();
        /**
         * Returns an array of users.
         * @param req
         * @param res The response of the method: GET
         */
        this.GetUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let getNewUsers = false;
            if (req.params["getNewUsers"] == "1") {
                getNewUsers = true;
            }
            res.json(yield this.userServices.GetAllUsers(getNewUsers));
        });
        /**
         * Return an user using the param of query string.
         * @param req Get the param of the query string and passed to the service.
         * @param res The response of the method: GET
         */
        this.GetUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json(yield this.userServices.GetUserById(req.params["id"]));
        });
    }
}
exports.default = UserController;
