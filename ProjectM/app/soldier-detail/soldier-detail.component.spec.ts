import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierDetailComponent } from './soldier-detail.component';

describe('SoldierDetailComponent', () => {
  let component: SoldierDetailComponent;
  let fixture: ComponentFixture<SoldierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
