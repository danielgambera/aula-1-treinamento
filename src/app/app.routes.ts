import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem-usuarios/listagem-usuarios.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'usuarios', component: ListagemUsuariosComponent },
    { path:'produtos', component: ListagemProdutosComponent }
];
