import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
   email:'testlogin@hotmail.com',
  password: '123456'
  }

  constructor(
    public modalCtrl: ModalController, private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  mostrarLogin(){
    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}


