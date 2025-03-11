import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    'Crear Mensajes Motivacionales',
    'Configurar Desafíos',
    'Respaldo en Nube',
    'Lista de Mensajes Motivacionales',
    'Lista de Desafíos'
  ];

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  logout() {
    console.log('Cerrar sesión');
  }
}
