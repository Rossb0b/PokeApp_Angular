import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Scavenger } from '@wishtack/rx-scavenger';
import { User } from 'src/app/shared/interface/user.interface';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;
  scavenger = new Scavenger(this);

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.userService.getCurrentUser().pipe(
      this.scavenger.collect()
    ).subscribe((user) => {
      this.user = user;
    })
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

  ngOnDestroy() { }
}
