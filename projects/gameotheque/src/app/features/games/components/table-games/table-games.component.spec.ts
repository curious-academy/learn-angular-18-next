import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGamesComponent } from './table-games.component';

describe('TableGamesComponent', () => {
  let component: TableGamesComponent;
  let fixture: ComponentFixture<TableGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
