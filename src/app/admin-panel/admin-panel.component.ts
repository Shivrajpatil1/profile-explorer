import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {


  profilForm!:FormGroup;
  dataById: any;
  profile: any;
  profiledetail: any;
  editId: any;
 
 
   

  constructor(private commonApiCallService: ProfileService,
    private fb: FormBuilder,private router:Router) { }

  
  ngOnInit() {
    this. editId = this.commonApiCallService.id;
      this. dataById = this.commonApiCallService.dataById;
         
    this.formdata()
    
  }




  async deleteRecord(id: number) {
    await this.commonApiCallService.deleteApiCall('profile', id).toPromise();
  }


 
   
  formdata(){
  this.profilForm = this.fb.group({
    Username: [this.dataById ? this.dataById.Username :''],
    Mobile: [this.dataById ? this.dataById.Mobile :'' ],
    Name: [this.dataById ? this.dataById.Name :''],
    Address: [this.dataById ? this.dataById.Address :''],
    Pan: [this.dataById ? this.dataById.Pan :''],
    Password: [this.dataById ? this.dataById.Password :''],
    Email: [this.dataById ? this.dataById.Email :''],
    Maps: [this.dataById ? this.dataById.Maps :''],
    // "/assets/newimg/hotel-10.jpg"
  });
}
// Username,Name,Mobile,Pan,Password,Email,Address,Maps,Gender img


  onSubmit() {
    let endpoint='profile';
  console.log('form data',this.profiledetail.value);
     
 
let request = {
  
  Username : this.profiledetail.value.Username,
  Mobile : this.profiledetail.value.Mobile,
 Name : this.profiledetail.value.Name,
 Pan:this.profiledetail.value.Pan,
 Password : this.profiledetail.value.Password,
 Email : this.profiledetail.value.Email,
 Address : this.profiledetail.value.Address,
 Maps : this.profiledetail.value.Maps,
 
}
if(this. editId){
  this.commonApiCallService.putApiCall(endpoint,request, this. editId).subscribe((res: any)=>{
    console.log(res);
  })
 
  this.router.navigateByUrl('/profile-details')
}

}
}
