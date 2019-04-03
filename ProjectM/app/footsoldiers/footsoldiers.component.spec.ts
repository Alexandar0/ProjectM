import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootsoldiersComponent } from './footsoldiers.component';

describe('FootsoldiersComponent', () => {
  let component: FootsoldiersComponent;
  let fixture: ComponentFixture<FootsoldiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootsoldiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootsoldiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
