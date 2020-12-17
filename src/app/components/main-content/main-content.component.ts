import { ChangeDetectionStrategy, Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DegreeType, Candidate } from 'src/app/models/models';
import { CandidateService } from 'src/app/services/services';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  candidate: Candidate;
  DegreeType = DegreeType;  // Allow template binding to access this enum's string values

  constructor(
    private route: ActivatedRoute,
    private service: CandidateService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id) id = 1;
      this.candidate = null;

      this.service.candidates.subscribe(candidates => {
        if(candidates.length == 0) return;

        this.candidate = this.service.candidateById(id);
      })
    })
  }

  getPhotoImage(){
    // DomSanitizer helps to prevent Cross Site Scripting Security bugs (XSS) by
    // sanitizing values to be safe to use from within the DOM
    return this.sanitizer.bypassSecurityTrustResourceUrl(`url(${this.candidate.photo})`);
  }

}
