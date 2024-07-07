import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginObj:any ={};
  constructor(private jobSrv: JobService, private router: Router) {

  }

  loginSubmit = () => {
   const res = {
      "UserName": this.loginObj.Email,
      "Password": this.loginObj.password,
    }
    this.jobSrv.login(res).subscribe((res: any) => {
      if (res.result) {
        alert("user login success")
        localStorage.setItem("jobLoginUser", JSON.stringify(res.data));
        this.router.navigate(['/home']);      }
      else {
        alert("login faild...?")
      }
    })
  }

}
