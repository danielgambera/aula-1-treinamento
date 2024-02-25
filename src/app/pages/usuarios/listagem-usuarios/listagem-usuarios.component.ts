import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listagem-usuarios',
    standalone: true,
    templateUrl: './listagem-usuarios.component.html',
    styleUrl: './listagem-usuarios.component.css',
    imports: [PageTitleComponent, RouterLink]
})
export class ListagemUsuariosComponent {

  titulo:string = 'Usuários';
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit()
  {
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, error => { console.error(error); })
  }

}
