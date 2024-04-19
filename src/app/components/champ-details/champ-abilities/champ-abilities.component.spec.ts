import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampAbilitiesComponent } from './champ-abilities.component';

describe('ChampAbilitiesComponent', () => {
  let component: ChampAbilitiesComponent;
  let fixture: ComponentFixture<ChampAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampAbilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
