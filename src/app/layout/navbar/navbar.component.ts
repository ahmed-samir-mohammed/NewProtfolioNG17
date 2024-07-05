import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
      <nav
      class="fixed top-0 left-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white rounded-none h-max bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div class="flex items-center justify-between text-blue-gray-900">
        <div class='bg-main font-hacked text-lg p-2 flex flex-col'>
          <span class='tracking-[3px] h-4 leading-[normal]'>ahmed</span>
          <span class='tracking-[4px] h-4 leading-[normal]'>samir</span>
        </div>
        <div class='w-8 flex flex-col justify-center items-end gap-1 cursor-pointer'>
          <span class='bg-main w-8 h-[3px] rounded-full'></span>
          <span class='bg-main w-4 h-[3px] rounded-full'></span>
        </div>
      </div>
    </nav>

  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
