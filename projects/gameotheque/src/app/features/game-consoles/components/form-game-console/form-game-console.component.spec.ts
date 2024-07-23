import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGameConsoleComponent } from './form-game-console.component';

describe('FormGameConsoleComponent', () => {
  let component: FormGameConsoleComponent;
  let fixture: ComponentFixture<FormGameConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGameConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGameConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
