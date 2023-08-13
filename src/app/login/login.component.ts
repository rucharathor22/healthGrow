import { Component } from "@angular/core";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  emailId: string;
  pwd;

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  credLogin() {
    console.log(this.emailId, this.pwd);
    this.router.navigate(["login-credentials"]);
  }
  loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(["login-google"]));
  }
}
