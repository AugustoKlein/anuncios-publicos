import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AnuncioService } from 'src/services/anuncio.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {

  
  constructor(
    private anuncioService: AnuncioService, public modalCtrl: ModalController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  getAnuncios(){
    return this.anuncioService.getAnuncios();
  }


}
