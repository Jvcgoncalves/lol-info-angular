import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchChampionsForm: FormGroup = new FormGroup({
    typedSearch: new FormControl([""])
  })

  constructor() { }

  handleSubmit(){

  }

  typingSearch(event: Event){
    const typedData = event.target as HTMLInputElement
    
  }
  
}
