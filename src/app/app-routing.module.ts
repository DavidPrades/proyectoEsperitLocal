import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './gallery/contact/contact.component';
import { AboutComponent } from './gallery/about/about.component';


const routes: Routes = [
  { path: '', redirectTo:'/gallery', pathMatch:'full'},
  { path:'Gallery', component: GalleryComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'About', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
