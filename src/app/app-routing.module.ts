import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



const routes: Routes = [
  { path: '',component:ProfileListComponent },
  { path: 'map-view', component: MapViewComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
