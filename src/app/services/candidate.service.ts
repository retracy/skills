import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../models/models';
import { CVService } from './cv.service';

@Injectable()
export class CandidateService {

  private dataStore: {
    candidates: Candidate[];
  }

  constructor(private cvService: CVService) {
    this.dataStore = { candidates: [] };
    this.dataStore.candidates.push({
      id: 1,
      name: 'Bob Tracy',
      photo: 'assets/images/bob.jpg',
      title: 'Staff Software Engineer',
      cvInfo: cvService.getCV('bob')
    },
    {
      id: 2,
      name: 'Emily Tracy',
      photo: 'assets/images/emily.jpg',
      title: 'Staff Software Engineer',
      cvInfo: cvService.getCV('emily')
    });
  }

  get candidates(): Observable<Candidate[]>{
    return of(this.dataStore.candidates);
  }

  candidateById(id: number): Candidate {
    return this.dataStore.candidates.find(x => x.id == id);
  }
}
