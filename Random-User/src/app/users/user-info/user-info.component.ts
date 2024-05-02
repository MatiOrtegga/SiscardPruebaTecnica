import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';
import User from '../models/User';
import Map from '../../../utils/Map';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() id!: string;
  user: User = new User('');
  map: any;
  constructor(private userService: UserService) {}

  async ngOnInit() {
    const data = await this.userService.GetUserById(this.id);
    this.user = data;
    const mapElement = document.getElementById('map') || null;
    this.map = new Map(mapElement!, this.user.Latitude, this.user.Longitude);
    this.map.GenerateMap();
  }
}

