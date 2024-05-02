import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from '../../table/table.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ProgressBarComponent,
    TableComponent,
    RouterLink,
    RouterOutlet,
    NgbModule,
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  title = 'Random-User';
  users: any;
  percentage: any = {};
  constructor(private userService: UserService) {}

  async ngOnInit() {
    const data = await this.userService.GetUsers();
    this.users = data.users;
    this.percentage = data.percentage;
  }

  async GetNewUsers() {
    const data = await this.userService.GetUsers(1);
    this.users = data.users;
    this.percentage = data.percentage;
    console.log(this.users)
  }
}
