import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {InternalElementComponent} from "../internal-element/internal-element.component";

@Component({
  selector: 'app-root-element',
  standalone: true,
  imports: [
    NgForOf,
    InternalElementComponent
  ],
  templateUrl: './root-element.component.html',
  styleUrl: './root-element.component.scss'
})
export class RootElementComponent{
  @Input() rootElements:any = [];


}
