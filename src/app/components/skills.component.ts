import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <app-sidenav></app-sidenav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
}
