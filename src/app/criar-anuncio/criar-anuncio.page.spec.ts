import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarAnuncioPage } from './criar-anuncio.page';

describe('CriarAnuncioPage', () => {
  let component: CriarAnuncioPage;
  let fixture: ComponentFixture<CriarAnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAnuncioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
