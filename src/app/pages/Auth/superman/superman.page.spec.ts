import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupermanPage } from './superman.page';

describe('SupermanPage', () => {
  let component: SupermanPage;
  let fixture: ComponentFixture<SupermanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupermanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
