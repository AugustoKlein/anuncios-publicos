import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AnuncioService } from 'src/services/anuncio.service';

@Component({
  selector: 'app-meus-anuncios',
  templateUrl: './meus-anuncios.page.html',
  styleUrls: ['./meus-anuncios.page.scss'],
})
export class MeusAnunciosPage implements OnInit {

  constructor(
    private anuncioService: AnuncioService, public modalCtrl: ModalController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  getMeusAnuncios(){
    return this.anuncioService.getMeusAnuncios();
  }
}
