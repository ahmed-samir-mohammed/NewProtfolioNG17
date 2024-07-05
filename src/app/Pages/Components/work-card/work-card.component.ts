import { CommonModule } from '@angular/common';
import { Project } from './../../../Core/Model/project.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      href="{{ project.href }}"
      class="relative flex overflow-hidden h-[50vh] group "
    >
      <img
        src="../../../../assets/img/{{ project.img }}"
        class="object-cover h-full group-hover:scale-[1.5] transition-all duration-300"
        alt=""
      />
      <div
        class="absolute bottom-0 p-8 w-full h-full bg-[#000] bg-opacity-30 overflow-hidden flex flex-col justify-end group-hover:bg-opacity-50"
      >
        <h2 class="font-bold text-[#fff] font-inter ">{{ project.name }}</h2>
        <!-- <p class="font-inter text-[12px] mt-3">{{ project.describtion }}</p> -->
      </div>
    </a>
  `,
  styleUrl: './work-card.component.scss',
})
export class WorkCardComponent {
  @Input() project!: Project;
  @Input() class: String = '';
}
