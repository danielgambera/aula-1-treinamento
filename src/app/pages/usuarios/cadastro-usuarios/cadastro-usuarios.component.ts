import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";


@Component({
    selector: 'app-cadastro-usuarios',
    standalone: true,
    templateUrl: './cadastro-usuarios.component.html',
    styleUrl: './cadastro-usuarios.component.css',
    imports: [ReactiveFormsModule, PageTitleComponent]
})

export class CadastroUsuariosComponent {

  usuarioForm: FormGroup;

  constructor(private fb:FormBuilder)
  {
      this.usuarioForm = this.fb.group({
        nome: ['', Validators.required],
        idade: []
      });
  }

}
