import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-leaf-element',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './leaf-element.component.html',
  styleUrl: './leaf-element.component.scss'
})
export class LeafElementComponent {
  @Input() leafNodes:any = [];

}
