import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";

@Component({
    selector: 'app-listagem-usuarios',
    standalone: true,
    templateUrl: './listagem-usuarios.component.html',
    styleUrl: './listagem-usuarios.component.css',
    imports: [PageTitleComponent]
})
export class ListagemUsuariosComponent {

  titulo:string = 'Usuários';

}
