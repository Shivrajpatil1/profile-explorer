import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
  profilForm!:FormGroup;
  dataById: any;
  profile: any=[];
  profiledetail: any;
  editId: any;
 
   

  constructor(private commonApiCallService: ProfileService, private router:Router
     ) { }


    async details(id: number) { 
        {
        await this.commonApiCallService.deleteApiCall('profile', id).toPromise();
      };
     
          
    } 
  

  ngOnInit(): void {
  //   this.commonApiCallService.ProfileDetails().subscribe((data) => {
      this.profile.push(this.commonApiCallService.databyid) ;
      console.log(this.profile);
    // });

    
   }




  async deleteRecord(id: number) {
    await this.commonApiCallService.deleteApiCall('profile', id).toPromise();
  }
  

  async edit(id: number) { 
    this.commonApiCallService .id= id;
    this.dataById = await this.commonApiCallService.editApiCall( id).toPromise();
    this.commonApiCallService.dataById = this.dataById;
       this.router.navigateByUrl('admin-panel')
  } 
}  