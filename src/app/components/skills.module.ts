import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills.component';
import { ToolbarComponent} from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CandidateService, CVService } from '../services/services';
import { JoinPipe } from '../join.pipe';

const routes: Routes = [
  {
    path: '', component: SkillsComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule.forChild(routes)
    ],
    providers: [
      CandidateService,
      CVService
    ],
    declarations: [SkillsComponent, ToolbarComponent, MainContentComponent, SidenavComponent, JoinPipe ]
  })
  export class SkillsModule { }