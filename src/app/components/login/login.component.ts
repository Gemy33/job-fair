import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../../services/user/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: any[] = [];
loginForm: FormGroup;

constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
}

ngOnInit(): void {
  // Fetch all usernames
  this.http.get<any[]>('https://fakestoreapi.com/users').subscribe({
    next: (data) => this.users = data,
    error: (err) => console.error('Error fetching users:', err)
  });
}

onSubmit() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;

    this.http.post('https://fakestoreapi.com/auth/login', { username, password }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Invalid username or password')
    });
  }
}


}
