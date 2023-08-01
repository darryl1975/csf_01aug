import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {  
  fruit: string = 'Durian'; 
  
  fullName: string = 'Darryl Ng';

  fontWeight: string = 'bold';

  // xx-small, x-small, small, medium, large, x-large, xx-large
  fontSize: string = 'xxx-large';

  testClick() {
    console.log('Button Test Clicked');
  }

}
