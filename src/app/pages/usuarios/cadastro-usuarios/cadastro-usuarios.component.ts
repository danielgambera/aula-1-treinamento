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

  id: any;
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    try
    {
      if (this.id)
      {
        this.usuarioService.buscarUsuarioPorId(this.id).subscribe(
          (usuario => {
            this.usuarioForm.patchValue({
              nome: usuario.nome,
              idade: usuario.idade
            })
          }));
      }
    }
    catch (error)
    {
      console.error(error);
    }

    
  }

  cadastrarUsuario() {
    
    console.log(this.usuarioForm.value);
    const usuario: IUsuario = this.usuarioForm.value;
    usuario.ativo = true;
    if (this.id)
    {
      usuario.id = this.id;
    }
    this.usuarioService.cadastrarUsuario(usuario).subscribe((result) =>
    {
      Swal.fire({
          title: "Boa!",
          text: `Usuário ${this.id ? ' editado' : 'cadastrado'}.`,
          icon:"success"
        });
      this.router.navigateByUrl('/usuarios');
    },
    (erro) => {
      console.error(erro);
    });
   
  }

}
