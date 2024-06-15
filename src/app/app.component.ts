import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ChildComponent],
})
export class AppComponent {
  title = 'inputOutputAng18';

  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);

    console.log(newItem);
  }
}
