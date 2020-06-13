import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CVService } from './cv.service';
import { ICVInfo, DegreeType } from './cv';

@Component({
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [CVService]
})
export class CVComponent implements OnInit {

  cvInfo: ICVInfo;
  DegreeType = DegreeType;  // Allow template binding to access this enum's string values
  imageSource: string;

  constructor(
    private _route: ActivatedRoute,
    private _cvService: CVService) {
  }

  ngOnInit() {
    let name = this._route.snapshot.paramMap.get('name');
    this.imageSource = `./assets/images/${name}.jpg`
    this._cvService.getCV(name)
      .subscribe(value => {
        console.log(value.jobs)
        this.cvInfo = value;
      });
  }

}
