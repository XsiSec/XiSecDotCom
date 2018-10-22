import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '..//material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  exports: [CommonModule, FormsModule, MaterialModule, RouterModule,
    NavbarComponent, FooterComponent, HomeComponent, AboutComponent,
    PageNotFoundComponent, ContactComponent, HeaderComponent, AnimationComponent, BackgroundComponent], // export all components
  declarations: [NavbarComponent, FooterComponent, HomeComponent, AboutComponent, PageNotFoundComponent, ContactComponent,
    HeaderComponent, AnimationComponent, BackgroundComponent, AboutComponent]
})
export class SharedModule { }
