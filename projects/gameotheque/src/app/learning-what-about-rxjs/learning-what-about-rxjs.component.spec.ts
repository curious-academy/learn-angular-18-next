import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningWhatAboutRxjsComponent } from './learning-what-about-rxjs.component';

describe('LearningWhatAboutRxjsComponent', () => {
  let component: LearningWhatAboutRxjsComponent;
  let fixture: ComponentFixture<LearningWhatAboutRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningWhatAboutRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningWhatAboutRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
