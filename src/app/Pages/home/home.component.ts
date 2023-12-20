import { Component } from '@angular/core';
import { HeroComponent } from "../Components/hero/hero.component";
import { HireMeComponent } from '../Components/hire-me/hire-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class='flex'>
      <app-hero />
      <app-hire-me />
    </div>
  `,
  styleUrl: './home.component.scss',
  imports: [HeroComponent, HireMeComponent]
})
export class HomeComponent {

}
