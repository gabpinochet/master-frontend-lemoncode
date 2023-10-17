import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatemenuComponent } from './privatemenu.component';

describe('PrivatemenuComponent', () => {
  let component: PrivatemenuComponent;
  let fixture: ComponentFixture<PrivatemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivatemenuComponent]
    });
    fixture = TestBed.createComponent(PrivatemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
