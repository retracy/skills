import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate } from 'src/app/models/models';
import { CandidateService } from 'src/app/services/services';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  public isScreenSmall$: Observable<boolean>;
  private isScreenSmall: boolean = false;

  candidates$: Observable<Candidate[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(private breakpointObserver: BreakpointObserver,
    private candidateService: CandidateService,
    private router: Router) {

    this.isScreenSmall$ = this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .pipe(
        map(state => state.matches)
      );

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });

    this.candidates$ = this.candidateService.candidates;

    this.isScreenSmall$.subscribe(val => {
      this.isScreenSmall = val;
      if (val && this.sidenav) {
        this.sidenav.close();
      }
    });
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
