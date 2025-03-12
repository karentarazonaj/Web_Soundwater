import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages-page',
  imports: [HeaderComponent, SidebarComponent, FooterComponent, MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './messages-page.component.html',
  styleUrl: './messages-page.component.css'
})
export class MessagesPageComponent {
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
