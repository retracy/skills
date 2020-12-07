import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CVComponent } from './cv.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CVComponent', () => {
  let component: CVComponent;
  let fixture: ComponentFixture<CVComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CVComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({ name: 'him' })
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
