import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafElementComponent } from './leaf-element.component';

describe('LeafElementComponent', () => {
  let component: LeafElementComponent;
  let fixture: ComponentFixture<LeafElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeafElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
