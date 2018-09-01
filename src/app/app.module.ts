import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { GitHubComponent } from './components/github/github.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
declare var particlesJS: any;


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'github', component: GitHubComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    BackgroundComponent,
    AppComponent,
    MainMenuComponent,
    ContactComponent,
    GitHubComponent,
    PageNotFoundComponent,
    HomeComponent,
    ServicesComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
