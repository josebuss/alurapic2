import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'ap-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private platformService: PlatformDetectorService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get("userName").value;
    this.authService.autenticate(
      userName,
      this.loginForm.get("password").value).subscribe(
        () => { this.router.navigate(["user", userName]) },
        erro => {
          console.log(erro);
          this.loginForm.reset();
          this.platformService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
          //this.platformService.isPlatformBrowser() ? this.userNameInput.nativeElement.focus() : null;
        }
      );
  };

}
