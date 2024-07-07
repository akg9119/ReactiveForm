import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss']
})
export class CreateNewJobComponent implements OnInit {
  categoryList: any = [];
  
  jobObj: any = {
    "JobId": "",
    "JobName": "",
    "CreatedDate": new Date(),
    "EmployerId": "",
    "Experience": "",
    "package": "",
    "Location": "",
    "JobDescription": "",
    "isActive": true,

  }
  registerForm() {
    // this.registration.post("http://localhost:3000/register", this.employerObj).subscribe((res) => {
    //   if (res) {
    //     alert("registration successfully ")
    //   }
    //   else {
    //     alert("registration faild ")

    //   }
    // })
  }
  ngOnInit(): void {
  }
  constructor(private jobSev: JobService) { 
    const userData =localStorage.getItem("jobLoginUser");

  if(userData != null){
   const data  =JSON.parse(userData)
   this.jobObj.EmployerId =data.empId
  }
  
  }
  getJobCategories() {
    this.jobSev.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
  CreateJob(){
    this.jobSev.createNewJob(this.jobObj).subscribe((res:any)=>{
      console.log("enter create job")
      if(res.result){
        alert("post create successfully")
      }
      else{
        alert("somthing went wrong !")
      }
    })
  }

}
