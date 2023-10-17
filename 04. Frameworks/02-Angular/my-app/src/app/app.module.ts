import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicmenuComponent } from './layout/publicmenu/publicmenu.component';
import { PrivatemenuComponent } from './layout/privatemenu/privatemenu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginformComponent } from './layout/loginform/loginform.component';
import { UserlistComponent } from './layout/userlist/userlist.component';
import { AddformComponent } from './layout/addform/addform.component';
import { UpdateformComponent } from './layout/updateform/updateform.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PublicmenuComponent,
    PrivatemenuComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    GalleryComponent,
    ProfileComponent,
    UsersComponent,
    LoginformComponent,
    UserlistComponent,
    AddformComponent,
    UpdateformComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
