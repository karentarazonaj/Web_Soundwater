import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-challengeslist-page',
  imports: [HeaderComponent, SidebarComponent, FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './challengeslist-page.component.html',
  styleUrl: './challengeslist-page.component.css'
})
export class ChallengeslistPageComponent {
  mensajeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mensajeForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
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
