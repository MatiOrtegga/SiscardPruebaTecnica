import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import User from '../users/models/User';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatPaginatorModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() users: User[] = [];
  totalItems = 0;
  itemsPerPage = 5;
  currentPageIndex = 0;
  currentPageUsers: User[] = [];
  dataLoaded = false;

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.currentPageIndex = event.pageIndex;
    this.loadUsers();
  }
  ngOnInit() {
    if (this.users !== undefined) {
      this.totalItems = this.users.length;
      this.loadUsers();
    }
  }
  ngDoCheck() {
    if (this.users !== undefined) {
      this.totalItems = this.users.length;
      this.loadUsers();
    }
  }

  ngOnChanges() {
    if (this.users !== undefined && !this.dataLoaded) {
      this.totalItems = this.users.length;
      this.loadUsers();
    }
  }
  loadUsers() {
    const startIndex = this.currentPageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.currentPageUsers = this.users.slice(startIndex, endIndex);
    this.dataLoaded = true;
  }
}
