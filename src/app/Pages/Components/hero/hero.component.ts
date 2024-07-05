import { WorkCardComponent } from './../work-card/work-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col items-center h-[60vh] justify-center">
      <h1 class='text-[4rem] font-hacked '>Ahmed Samir</h1>
      <p class='text-center lg:w-[50%]'>I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.</p>
    </div>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
