import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agexample';

  constructor(private router: Router) {
  }

  onHomeMenu(): void {
    this.router.navigateByUrl('/');
  }

  onProfileMenu(): void {
    this.router.navigateByUrl('/profile');
  }
}
