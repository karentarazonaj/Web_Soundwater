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
    { label: 'Lista de Mensajes Motivacionales', route: '/messages-list' },
    { label: 'Configurar Desafíos', route: '/challenges' },
    { label: 'Lista de Desafíos', route: '/challenges-list' },
    { label: 'Respaldo en Nube', route: '/backup' }    
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
