import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'especies',
        loadComponent: () => import('./paginas/especies/especies.page').then( m => m.EspeciesPage)
      },
      {
        path: 'acuarios',
        loadComponent: () => import('./paginas/acuarios/acuarios.page').then( m => m.AcuariosPage)
      },
      {
        path: 'salud',
        loadComponent: () => import('./paginas/salud/salud.page').then( m => m.SaludPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then( m => m.PerfilPage)
      },
      {
        path: 'tabs',
        loadComponent: () => import('./paginas/tabs/tabs.page').then( m => m.TabsPage)
      },
    ]
  }
];
