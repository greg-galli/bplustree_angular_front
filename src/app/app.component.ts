import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {RootElementComponent} from "./root-element/root-element.component";
import {InternalElementComponent} from "./internal-element/internal-element.component";
import {LeafElementComponent} from "./leaf-element/leaf-element.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RootElementComponent, InternalElementComponent, LeafElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'frontend';
  treeData: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/').subscribe((data: any) => {
      this.treeData = data;
    });
  }

}
