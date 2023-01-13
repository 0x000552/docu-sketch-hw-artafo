import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeIconGeneratorComponent } from './awesome-icon-generator.component';

describe('AwesomeIconGeneratorComponent', () => {
  let component: AwesomeIconGeneratorComponent;
  let fixture: ComponentFixture<AwesomeIconGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeIconGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeIconGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
