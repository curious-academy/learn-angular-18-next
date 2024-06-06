import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideoGameComponent } from './create-video-game.component';

describe('CreateVideoGameComponent', () => {
  let component: CreateVideoGameComponent;
  let fixture: ComponentFixture<CreateVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVideoGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
