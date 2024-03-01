import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-cadastro-usuarios',
    standalone: true,
    templateUrl: './cadastro-usuarios.component.html',
    styleUrl: './cadastro-usuarios.component.css',
    imports: [ReactiveFormsModule, PageTitleComponent]
})

export class CadastroUsuariosComponent {

  usuarioForm: FormGroup;

  constructor(private fb:FormBuilder, 
    private usuarioService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
  {
      this.usuarioForm = this.fb.group({
        nome: ['', Validators.required],
        idade: []
      });
  }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  cadastrarUsuario() {
    
    console.log(this.usuarioForm.value);
    const usuario: IUsuario = this.usuarioForm.value;
    usuario.ativo = true;
    this.usuarioService.cadastrarUsuario(usuario).subscribe((result) =>
    {
      console.log(result);
      Swal.fire({
        title: "Boa!",
        text: "Cadastrou mais um.",
        icon:"success"
      });
      this.router.navigateByUrl('/usuarios');
    },
    (erro) => {
      console.error(erro);
    });
   
  }

}
