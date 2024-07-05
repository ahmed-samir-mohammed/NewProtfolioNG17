import { Project } from './../../../Core/Model/project.model';
import { Component } from '@angular/core';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-work-section',
  standalone: true,
  template: `
    <h1 class="text-2xl mb-8 font-hacked w-fit bg-main px-2">Selected Works</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 lg:grid-cols-4">
      @for (item of projects; track $index) {
      <app-work-card [project]="item" />
      }
    </div>
  `,
  styleUrl: './work-section.component.scss',
  imports: [WorkCardComponent],
})
export class WorkSectionComponent {
  projects: Array<Project> = [
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
    {
      href: 'https://haj.gov.sa',
      img: '01.png',
      name: 'Hajj App',
      describtion:
        'I am a passionate web developer specializing in MEAN Stack. I have extensive experience in building web applications using MongoDB, Express.js, Angular, and Node.js, and I always strive to deliver innovative and efficient solutions.',
    },
  ];
}
