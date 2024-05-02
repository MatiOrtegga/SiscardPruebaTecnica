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
const FetchClient_1 = __importDefault(require("../utils/FetchClient"));
const User_1 = __importDefault(require("../Models/User"));
class UserServices {
    constructor() {
        this.url = "https://randomuser.me/api?results=20";
        this.Fetch = new FetchClient_1.default();
        this.users = new Array();
        /**
         *
         * @returns an array of users;
         */
        this.GetAllUsers = (...args_1) => __awaiter(this, [...args_1], void 0, function* (getNewUsers = false) {
            if (this.users.length == 20 && !getNewUsers) {
                let percentage = this.getPercentage();
                return {
                    users: this.users,
                    percentage: percentage,
                };
            }
            const response = yield this.Fetch.Get(this.url);
            if (getNewUsers) {
                this.users = new Array();
            }
            for (let data of response.results) {
                let newUser = new User_1.default(data, response.info);
                this.users.push(newUser);
            }
            let percentage = this.getPercentage();
            return {
                users: this.users,
                percentage: percentage,
            };
        });
        /**
         *
         * @param id the param to search in the users array, if id is null then i use the name to search in the array.
         * @returns The user that match with the param.
         */
        this.GetUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            let user = this.users.filter((u) => u.Id === id);
            if (user.length == 0) {
                user = this.users.filter((u) => u.Name === id);
            }
            return user;
        });
    }
    /**
     *
     * @param totalResults total of users, by default its 20.
     * @returns the percentage of mens and womens in the array of users.
     */
    getPercentage(totalResults = 20) {
        let totalWomens = this.users.filter((w) => w.Gender === "female").length || 0;
        let totalMens = this.users.filter((m) => m.Gender === "male").length || 0;
        return {
            totalMens: totalMens,
            totalWomens: totalWomens,
            percentageMen: (totalMens / totalResults) * 100,
            percentageWomen: (totalWomens / totalResults) * 100,
        };
    }
}
exports.default = UserServices;
