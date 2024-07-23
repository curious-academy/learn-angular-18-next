import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameConsoleComponent } from './add-game-console.component';

describe('AddGameConsoleComponent', () => {
  let component: AddGameConsoleComponent;
  let fixture: ComponentFixture<AddGameConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGameConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGameConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
