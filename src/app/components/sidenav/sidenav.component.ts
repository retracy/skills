import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/models';
import { CandidateService } from 'src/app/services/services';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean;

  candidates$: Observable<Candidate[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(private breakpointObserver: BreakpointObserver,
    private candidateService: CandidateService,
    private router: Router) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

      this.candidates$ = this.candidateService.candidates;

      this.router.events.subscribe(() => {
        if (this.isScreenSmall) {
          this.sidenav.close();
        }
      });  
    }
}
