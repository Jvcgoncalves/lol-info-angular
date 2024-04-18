import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loading-div">
      <div class="loading-message d-flex justify-content-center align-items-center" role="status">
        <span>Carregando</span>
        <span class="loading-dots-animation">
          .
        </span>
        <span class="loading-dots-animation">
          .
        </span>
        <span class="loading-dots-animation">
          .
        </span>
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

}
