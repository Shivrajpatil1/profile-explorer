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
  router: any;
  

  
  constructor(private api:ProfileService,router:Router){}
  
  ngOnInit(): void {
      this.api.ProfileDetails().subscribe((data)=>{
       this.profile=data;
       console.log(this.profile);
    });
    }

details(){

    this.router.navigateByUrl('profile-details')
  }
}
