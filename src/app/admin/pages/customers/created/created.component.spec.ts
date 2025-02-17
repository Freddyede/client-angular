import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedComponent } from './created.component';

describe('CreatedComponent', () => {
  let component: CreatedComponent;
  let fixture: ComponentFixture<CreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
