import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZamowionePage } from './zamowione.page';

describe('ZamowionePage', () => {
  let component: ZamowionePage;
  let fixture: ComponentFixture<ZamowionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamowionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZamowionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
