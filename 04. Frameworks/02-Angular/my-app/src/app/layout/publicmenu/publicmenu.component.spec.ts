import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicmenuComponent } from './publicmenu.component';

describe('PublicmenuComponent', () => {
  let component: PublicmenuComponent;
  let fixture: ComponentFixture<PublicmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicmenuComponent]
    });
    fixture = TestBed.createComponent(PublicmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
