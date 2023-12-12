import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalElementComponent } from './internal-element.component';

describe('InternalElementComponent', () => {
  let component: InternalElementComponent;
  let fixture: ComponentFixture<InternalElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
