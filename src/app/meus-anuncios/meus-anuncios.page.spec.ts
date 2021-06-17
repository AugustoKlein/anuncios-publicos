import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusAnunciosPage } from './meus-anuncios.page';

describe('MeusAnunciosPage', () => {
  let component: MeusAnunciosPage;
  let fixture: ComponentFixture<MeusAnunciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnunciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusAnunciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
