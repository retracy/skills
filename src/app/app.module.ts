import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, TitleStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsTitlePageStrategy } from './services/title-strategy.service';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/skills.module').then(m => m.SkillsModule)},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{provide: TitleStrategy, useClass: SkillsTitlePageStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
