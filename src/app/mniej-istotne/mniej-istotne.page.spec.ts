import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MniejIstotnePage } from './mniej-istotne.page';

describe('MniejIstotnePage', () => {
  let component: MniejIstotnePage;
  let fixture: ComponentFixture<MniejIstotnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MniejIstotnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MniejIstotnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
