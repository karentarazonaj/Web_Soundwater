import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messageslist-page',
  imports: [HeaderComponent, SidebarComponent, FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './messageslist-page.component.html',
  styleUrl: './messageslist-page.component.css'
})
export class MessageslistPageComponent {
  mensajeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mensajeForm = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  guardarMensaje() {
    if (this.mensajeForm.valid) {
      console.log('Mensaje guardado:', this.mensajeForm.value);
    }
  }
}
