import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api ='http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  buscarTodosUsuarios()
  {
    return this.http.get<IUsuario[]>(this.api);
  }

  cadastrarUsuario(usuario: IUsuario)
  {
    return this.http.post(this.api, usuario);
  }

  removerUsuario(id: number)
  {
    return this.http.delete(`${this.api}/${id}`)
  }

}
