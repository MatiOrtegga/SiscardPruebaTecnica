import FetchClient from "../utils/FetchClient";
import User from "../Models/User";

class UserServices {
  private url = "https://randomuser.me/api?results=20";
  private Fetch = new FetchClient();
  private users: User[] = new Array();

  /**
   *
   * @returns an array of users;
   */
  GetAllUsers = async (getNewUsers: boolean = false) => {
    if (this.users.length == 20 && !getNewUsers) {
      let percentage = this.getPercentage();
      return {
        users: this.users,
        percentage: percentage,
      };
    }
    
    const response = await this.Fetch.Get(this.url);
    
    if (getNewUsers) {
      this.users = new Array();
    }
    for (let data of response.results) {
      let newUser: User = new User(data, response.info);
      this.users.push(newUser);
    }

    let percentage = this.getPercentage();

    return {
      users: this.users,
      percentage: percentage,
    };
  };

  /**
   *
   * @param id the param to search in the users array, if id is null then i use the name to search in the array.
   * @returns The user that match with the param.
   */
  GetUserById = async (id: string) => {
    let user = this.users.filter((u) => u.Id === id);
    if (user.length == 0) {
      user = this.users.filter((u) => u.Name === id);
    }
    return user;
  };
  /**
   *
   * @param totalResults total of users, by default its 20.
   * @returns the percentage of mens and womens in the array of users.
   */
  private getPercentage(totalResults: number = 20) {
    let totalWomens: number =
      this.users.filter((w) => w.Gender === "female").length || 0;
    let totalMens: number =
      this.users.filter((m) => m.Gender === "male").length || 0;

    return {
      totalMens: totalMens,
      totalWomens: totalWomens,
      percentageMen: (totalMens / totalResults) * 100,
      percentageWomen: (totalWomens / totalResults) * 100,
    };
  }
}

export default UserServices;
