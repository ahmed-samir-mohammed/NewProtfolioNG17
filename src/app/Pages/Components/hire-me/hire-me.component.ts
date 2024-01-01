import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-me',
  standalone: true,
  imports: [],
  template: `
    <div class='flex justify-end'>
      <button class="px-4 py-2 bg-transparent border-[2px] border-[#ffcc00] ">Hire Me</button>
    </div>
  `,
  styleUrl: './hire-me.component.scss'
})
export class HireMeComponent {

}
