import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsortymentPage } from './asortyment.page';

describe('AsortymentPage', () => {
  let component: AsortymentPage;
  let fixture: ComponentFixture<AsortymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsortymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsortymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
