import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampExtraInfoComponent } from './champ-extra-info.component';

describe('ChampExtraInfoComponent', () => {
  let component: ChampExtraInfoComponent;
  let fixture: ComponentFixture<ChampExtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampExtraInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
