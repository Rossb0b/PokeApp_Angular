import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
  ) {
    this.buildForm(); // better build form in constructor than onInit lifecycle
  }

  ngOnInit() {
    this.authService.logout();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['admin@admin.com', [Validators.required]],
      password: ['admin', [Validators.required]],
    });
  }

  async login(): Promise<void> {
    if (this.form.valid) {
      this.loading = true;

      try {
        const req = await this.authService.login(this.form.value);
        const token = req.token;
        localStorage.setItem('jwt', token);
        this.userService.setUser(req.user);
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }

      this.router.navigateByUrl('/protected');
    }
  }
}
