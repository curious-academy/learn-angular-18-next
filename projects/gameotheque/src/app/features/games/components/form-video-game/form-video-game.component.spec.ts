import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideoGameComponent } from './form-video-game.component';

describe('FormVideoGameComponent', () => {
  let component: FormVideoGameComponent;
  let fixture: ComponentFixture<FormVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVideoGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
