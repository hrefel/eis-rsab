import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  showPassword = false;

  namaPengguna: any;
  kataSandi: any;

  // @HostListener("window:keydown", ["$event"]) onKeyDown(event:KeyboardEvent) {
  //   console.log(event.getModifierState);
  // }
  isRedirect = localStorage.getItem("isRedirect");

  constructor(
    private http: HttpService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.namaPengguna = this.route.snapshot.queryParamMap.get("namaUser");
    this.kataSandi = this.route.snapshot.queryParamMap.get("password");
    if (this.namaPengguna) {
      this.signin();
    }
  }

  getInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  signin() {
    let data = {
      namaUser: this.namaPengguna,
      kataSandi: this.kataSandi,
    };

    this.http.login(data).subscribe((res: any) => {
      console.log(res);
      this.cookieService.set("token", res.messages["X-AUTH-TOKEN"]);
      this.cookieService.set("dataLogin", JSON.stringify(res.data));

      window.location.replace("/beranda");
    });
  }
}
