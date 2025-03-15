import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageslistPageComponent } from './messageslist-page.component';

describe('MessageslistPageComponent', () => {
  let component: MessageslistPageComponent;
  let fixture: ComponentFixture<MessageslistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageslistPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageslistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
