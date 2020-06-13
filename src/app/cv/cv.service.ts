import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICVInfo } from './cv';
import { Observable } from 'rxjs';

@Injectable()
export class CVService {
  private _cvUrl = './api/cv';

  constructor(private _http: HttpClient) {}

  getCV(name: string): Observable<ICVInfo> {
    return this._http.get<ICVInfo>(this._cvUrl + '/' + name + '.json');
  }
}
