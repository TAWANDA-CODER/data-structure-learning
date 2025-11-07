import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { COS214AppButtonComponent } from './cos214app-button.component';

describe('Cos214appButtonComponent', () => {
  let component: COS214AppButtonComponent;
  let fixture: ComponentFixture<COS214AppButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [COS214AppButtonComponent],
      imports: [IonicModule.forRoot(), COS214AppButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(COS214AppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
