import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DegreeType, Candidate } from 'src/app/models/models';
import { CandidateService } from 'src/app/services/services';

@Component({
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent {

  candidate$: Observable<Candidate>;
  DegreeType = DegreeType;  // Allow template binding to access this enum's string values

  constructor(
    private route: ActivatedRoute,
    private service: CandidateService,
    private sanitizer: DomSanitizer
  ) {
    this.candidate$ = this.route.params
    .pipe(
      map(p => this.service.candidateById(p.id ? p.id : 1))
    );
  }

  getPhotoImage(candidate: Candidate): SafeResourceUrl {
    // DomSanitizer helps to prevent Cross Site Scripting Security bugs (XSS) by
    // sanitizing values to be safe to use from within the DOM
    return this.sanitizer.bypassSecurityTrustResourceUrl(`url(${candidate.photo})`);
  }
}
