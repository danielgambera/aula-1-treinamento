import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem-usuarios/listagem-usuarios.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { CadastroUsuariosComponent } from './pages/usuarios/cadastro-usuarios/cadastro-usuarios.component';
import { CadastroProdutosComponent } from './pages/produtos/cadastro-produtos/cadastro-produtos.component';
import { UsuarioGuard } from './guards/usuario.guard';

export const routes: Routes = [
    { path:'', 
        component: HomeComponent },
    { path:'usuarios/cadastrar', 
        component: CadastroUsuariosComponent,
        canActivate: [UsuarioGuard] },
    { path:'usuarios/editar/:id', 
        component: CadastroUsuariosComponent,
        canActivate: [UsuarioGuard] },
    { path:'usuarios', 
        component: ListagemUsuariosComponent },
    { path:'produtos/cadastrar', 
        component: CadastroProdutosComponent },
        { path:'produtos/editar/:id', 
        component: CadastroProdutosComponent },
    { path:'produtos', 
        component: ListagemProdutosComponent },

];
