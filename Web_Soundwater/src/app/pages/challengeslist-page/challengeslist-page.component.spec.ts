import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeslistPageComponent } from './challengeslist-page.component';

describe('ChallengeslistPageComponent', () => {
  let component: ChallengeslistPageComponent;
  let fixture: ComponentFixture<ChallengeslistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeslistPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeslistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
