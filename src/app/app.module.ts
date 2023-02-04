import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferenceComponent } from './reference/reference.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '#list-item-1', component: AboutComponent },
  { path: '#list-item-2', component: EducationComponent },
  { path: '#list-item-3', component: SkillsComponent },
  { path: '#list-item-4', component: AchievementsComponent },
  { path: '#list-item-5', component: ReferenceComponent },
  { path: '#list-item-6', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ReferenceComponent,
    PagenotfoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
