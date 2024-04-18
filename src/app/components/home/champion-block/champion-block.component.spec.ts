import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionBlockComponent } from './champion-block.component';

describe('ChampionBlockComponent', () => {
  let component: ChampionBlockComponent;
  let fixture: ComponentFixture<ChampionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
