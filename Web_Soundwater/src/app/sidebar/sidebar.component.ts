import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Crear Mensajes Motivacionales', route: '/messages' },
    { label: 'Configurar Desafíos', route: '/challenges' },
    { label: 'Respaldo en Nube', route: '/backup' },
    { label: 'Lista de Mensajes Motivacionales', route: '/messages-list' },
    { label: 'Lista de Desafíos', route: '/messages-challenges' }
  ];

  selectedItem: string | null = null;

  constructor(private router: Router) {}

  selectItem(item: any) {
    this.router.navigate([item.route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route; 
  }

  logout() {
    console.log('Cerrar sesión');
  }
}
