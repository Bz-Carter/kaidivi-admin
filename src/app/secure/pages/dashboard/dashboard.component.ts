import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message = '';

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (res: any) => {
        this.message = `Hi ${res.first_name} ${res.last_name}`;
        AuthService.authEmitter.emit(true);
      },
      error: err => {
        this.message = `You are not authenticated`;
        AuthService.authEmitter.emit(false);
      }
    });
  }
}
