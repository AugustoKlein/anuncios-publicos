import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'src/models/anuncio.model';
import { AnuncioService } from 'src/services/anuncio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  senha: string;
  usuario: User;

  constructor(private service:AnuncioService, public nav: NavController) {
    this.usuario = new User();
  }

  ngOnInit() {
  }

  async doLogin(){
    this.usuario.user = this.user;
    this.usuario.senha = this.senha;

    var sucess = this.service.setUser(this.usuario);
    console.log(sucess);
    if(sucess){
      this.nav.navigateForward('/tabs/tabs/meus-anuncios');
    }else{
      alert("Sua senha ou seu usuario esta errado");
    }
  }

}
