import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {LeafElementComponent} from "../leaf-element/leaf-element.component";

@Component({
  selector: 'app-internal-element',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    LeafElementComponent
  ],
  templateUrl: './internal-element.component.html',
  styleUrl: './internal-element.component.scss'
})
export class InternalElementComponent {
  @Input() internalNodes:any = [];

}
