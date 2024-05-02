import { Injectable } from '@angular/core';
import FetchClient from '../../../utils/FetchClient';
import User from '../models/User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private fetchUsers = new FetchClient();

  constructor() {}

  async GetUsers(getNewUsers: number = 0) {
    const response = await this.fetchUsers.Get(
      `http://localhost:3000/api/users/${getNewUsers}`
    );

    let users: User[] = new Array();
    for (let data of response.users) {
      let user: User = new User(data);
      users.push(user);
    }
    return {
      users,
      percentage: response.percentage,
    };
  }
  async GetUserById(id: string) {
    const response = await this.fetchUsers.Get(
      `http://localhost:3000/api/user/${id}`
    );
    let user: User = new User(response[0]);
    return user;
  }
}
