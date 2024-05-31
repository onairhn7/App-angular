import { Component } from '@angular/core';
import { Igym } from '../interfaces/Igym';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.css'
})
export class GymComponent {

  gym : Igym = {
    titulo: 'Bienvenido a Planet Fitness',
    subtitulo: 'Inicia tu cambio con tan solo 10.99$',
    img: {

      src : 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/438691238_18315471319176893_6127544349429144346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e9F6DpXGcVkQ7kNvgF8P9I0&_nc_ht=scontent-lax3-1.xx&oh=00_AYDMy5zhrUAmxBn9v-8NStLd-UZq1MRqAtsiJ8fFuQT42Q&oe=665D9F4E',
      alt : 'foto chica fitness'
    }

    
  }
  destacado:boolean = true
}
