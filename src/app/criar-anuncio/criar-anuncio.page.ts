import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Anuncio } from 'src/models/anuncio.model';
import { AnuncioService } from 'src/services/anuncio.service';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.page.html',
  styleUrls: ['./criar-anuncio.page.scss'],
})
export class CriarAnuncioPage implements OnInit {
  titulo: string;
  artigo: string;
  autor: string;
  anuncio: Anuncio;

  constructor(
    private anuncioService: AnuncioService, public modalCtrl: ModalController, private toastCtrl: ToastController) {
      this.anuncio = new Anuncio();
  }

  ngOnInit(){}
  
  saveAnuncio(){
    this.anuncio.id = 3;
    this.anuncio.title = this.titulo;
    this.anuncio.autor = this.anuncioService.user.user;
    this.anuncio.article = this.artigo;

    this.anuncioService.save(this.anuncio);
  }


}
