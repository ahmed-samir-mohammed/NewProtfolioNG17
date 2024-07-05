import { WorkSectionComponent } from './../Components/work-section/work-section.component';
import { Component } from '@angular/core';
import { HeroComponent } from '../Components/hero/hero.component';
import { HireMeComponent } from '../Components/hire-me/hire-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto">
      <app-hero />
    </div>
    <app-work-section />
  `,
  styleUrl: './home.component.scss',
  imports: [HeroComponent, HireMeComponent, WorkSectionComponent],
})
export class HomeComponent {}
