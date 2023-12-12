import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootElementComponent } from './root-element.component';

describe('RootElementComponent', () => {
  let component: RootElementComponent;
  let fixture: ComponentFixture<RootElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
