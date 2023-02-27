import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaoutComponent } from './abaout.component';

describe('AbaoutComponent', () => {
  let component: AbaoutComponent;
  let fixture: ComponentFixture<AbaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbaoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
