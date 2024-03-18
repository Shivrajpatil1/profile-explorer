import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  profiles: any;
  profile: any;
   
  
  

  
  constructor(private api:ProfileService,private router:Router){}
  
  ngOnInit(): void {
      this.api.ProfileDetails().subscribe((data)=>{
       this.profile=data;
       console.log(this.profile);
    });
    }

    async detailsApiCall(id:number){     
     this.api.databyid= await this.api.editApiCall( id).toPromise();

      this.router.navigateByUrl('/profile-details')
    }

  }