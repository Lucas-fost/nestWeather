import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTileComponent } from './current-tile.component';

describe('CurrentTileComponent', () => {
  let component: CurrentTileComponent;
  let fixture: ComponentFixture<CurrentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
