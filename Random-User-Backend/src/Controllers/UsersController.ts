import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {
  private readonly userServices = new UserServices();

  /**
   * Returns an array of users.
   * @param req
   * @param res The response of the method: GET
   */
  GetUsers = async (req: Request, res: Response) => {
    let getNewUsers = false;
    if(req.params["getNewUsers"] == "1") {
      getNewUsers = true;
    }
    res.json(
      await this.userServices.GetAllUsers(getNewUsers)
    );
  };
  /**
   * Return an user using the param of query string.
   * @param req Get the param of the query string and passed to the service.
   * @param res The response of the method: GET
   */
  GetUser = async (req: Request, res: Response) => {
    res.json(await this.userServices.GetUserById(req.params["id"]));
  };
}
export default UserController;
