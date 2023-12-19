import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <p>Welcome to my corner of the digital world! </p>
    <h1>I'm Ahmed Samir</h1>
    <p>A passionate Software Engineer specializing in <span>JavaScript.</span></p>
    <p>In crafting web experiences, I harness the power of cutting-edge technologies, particularly Angular for dynamic front-end development and Node.js for robust server-side solutions. Join me on this journey of innovation and creativity in the realm of web development!</p>
  `,
  styles: [`

  `]
})

export class AppComponent {
  title = 'Ng17';
}

