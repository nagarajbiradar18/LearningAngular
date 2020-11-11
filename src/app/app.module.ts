import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component';
import { ChildCComponent } from './dashboard/child-c/child-c.component';


import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { GenderComponent } from './home/gender/gender.component';

import { BuildInPipesComponent } from './home/build-in-pipes/build-in-pipes.component';
import { GenderLabelPipePipe } from './home/gender/gender-label-pipe.pipe';
import { GenderPipePipe } from './home/gender/gender-pipe.pipe';
import { NewPipePipe } from './home/gender/new-pipe.pipe';
import { ParentComponent } from './profile/parent/parent.component';
import { ChildComponent } from './profile/child/child.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    CareerComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent,
    GenderComponent,
    GenderPipePipe,
    BuildInPipesComponent,
    GenderLabelPipePipe,
    NewPipePipe,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
