import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <p class='font-inter font-medium'>Welcome to my corner of the digital world! </p>
    <h1 class='font-inter font-medium'>I'm Ahmed Samir</h1>
    <p class='font-inter font-medium'>A passionate Software Engineer specializing in <span>JavaScript.</span></p>
    <p class='font-inter font-medium'>In crafting web experiences, I harness the power of cutting-edge technologies, particularly Angular for dynamic front-end development and Node.js for robust server-side solutions. Join me on this journey of innovation and creativity in the realm of web development!</p>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
