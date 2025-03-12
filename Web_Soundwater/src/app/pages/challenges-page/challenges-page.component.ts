import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenges-page',
  imports: [HeaderComponent, SidebarComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './challenges-page.component.html',
  styleUrl: './challenges-page.component.css'
})
export class ChallengesPageComponent {
  mensajeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mensajeForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

    guardarMensaje() {
      if (this.mensajeForm.valid) {
        console.log('Mensaje guardado:', this.mensajeForm.value);
      }
    }
}
