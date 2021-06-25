import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    // { path: 'produtos', component: ListaProdutoComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard]},
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
                .then(m => m.ProdutoModule)},
    { path: 'admin',
            loadChildren: () => import('./admin/admin.module')
                .then(m => m.AdminModule),
            canLoad: [AuthGuard],
            canActivate: [AuthGuard]},
    { path: 'filmes', component: FilmesComponent },

    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }