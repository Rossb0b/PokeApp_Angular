import { Component } from '@angular/core';
import { UserService } from './shared/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.connectUser();

    if (!this.userService.getCurrentUserValue()) {
      this.userService.connectUser();
    }
  }

  async connectUser(): Promise<void> {
    try {
      await this.userService.connectUser();
    } catch (error) {
      this.router.navigateByUrl("/");

      return;
    }
  }
}
