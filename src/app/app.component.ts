import { ChangeDetectionStrategy, Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(`Our Skills ${VERSION.full}`)
  }
}
