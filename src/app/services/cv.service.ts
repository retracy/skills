import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICVInfo } from '../models/models';

@Injectable()
export class CVService {
  private _cvUrl = './api/cv';

  constructor(private _http: HttpClient) {}

  getCV(name: string): Observable<ICVInfo> {
    return this._http.get<ICVInfo>(this._cvUrl + '/' + name + '.json');
  }
}
