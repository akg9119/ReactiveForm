import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import these
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private registration: HttpClient ,private job : JobService) {

  }

  employerObj: any = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "MobileNo": "",
    "City": "",
    "GstNo": "",
    "password": "",
  }

  registerForm() {
    const res= {
      "EmployerId": 389,
      "CompanyName": "greentin",
      "EmailId": "anet@gmail.com",
      "MobileNo": "8778877898",
      "PhoneNo": "",
      "CompanyAddress": "pandharpur",
      "City": "solapur",
      "State": "maharashtra",
      "PinCode": "81182",
      "LogoURL": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flogo&psig=AOvVaw3IWcm60mhnisVHDRdu-MpT&ust=1715233976896000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjo69Cu_YUDFQAAAAAdAAAAABAE",
      "GstNo": "37737373"
    }
    this.job.registrationEmp(res).subscribe((res) => {
      if (res) {
        alert("registration successfully ")
      }
      else {
        alert("registration faild ")

      }
    })
  }
}
