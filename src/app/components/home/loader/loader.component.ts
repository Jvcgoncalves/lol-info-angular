import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div id="loader" class="spinner-border-div d-flex justify-content-center align-items-center mt-5">
      <div class="spinner-border text-warning " role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

}
