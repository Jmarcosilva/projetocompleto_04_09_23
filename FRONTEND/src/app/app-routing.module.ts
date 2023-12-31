import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCarrosComponent } from './components/cadastrocarros/cadastrocarros.component';
import { CadastroClientesComponent } from './components/cadastroclientes/cadastroclientes.component';
import { CadastroVendasComponent } from './components/cadastrovendas/cadastrovendas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { FinanciamentoComponent } from './components/financiamento/financiamento.component';
import { LoginComponent } from './components/login/login.component';
import { HomesisComponent } from './components/homesis/homesis.component';
import { ListaClientesComponent } from './components/viewcadastroclientes/listaclientes.component';
import { ListaVendasComponent } from './components/listavendas/listavendas.component'
import { ViewcadastrocarrosComponent } from './components/viewcadastrocarros/viewcadastrocarros.component';
import { UpdateclientesComponent } from './components/updateclientes/updateclientes.component';
import { UpdadecarrosComponent } from './components/updatecarros/updadecarros.component';



const routes: Routes = [
  {path:"cadastrocarros",component:CadastroCarrosComponent},
  {path:"cadastroclientes", component:CadastroClientesComponent},
  {path:"cadastrovendas", component:CadastroVendasComponent},
  {path:"updatecarro/:id", component:UpdadecarrosComponent},
  {path:"estoque", component:EstoqueComponent},
  {path:"", component:HomeComponent},
  {path:"financiamento", component:FinanciamentoComponent},
  {path:"login", component:LoginComponent},
  {path:"homesis", component:HomesisComponent},
  {path:"listacarros",component:ViewcadastrocarrosComponent},
  {path:"listaclientes", component:ListaClientesComponent},
  {path:"listavendas", component:ListaVendasComponent},
  {path:"update/:id", component: UpdateclientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
