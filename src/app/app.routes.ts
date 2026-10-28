import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'eventos',
        loadComponent: () => import('./paginas/eventos/eventos.page').then( m => m.EventosPage)
      },
      {
        path: 'galeria',
        loadComponent: () => import('./paginas/galeria/galeria.page').then( m => m.GaleriaPage)
      },
      {
        path: 'calendario',
        loadComponent: () => import('./paginas/calendario/calendario.page').then( m => m.CalendarioPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then( m => m.PerfilPage)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./paginas/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'deporte',
    loadComponent: () => import('./paginas/deporte/deporte.page').then(m => m.DeportePage)
  },
  {
    path: 'ciencia',
    loadComponent: () => import('./paginas/ciencia/ciencia.page').then(m => m.CienciaPage)
  },
  {
    path: 'ocio',
    loadComponent: () => import('./paginas/ocio/ocio.page').then( m => m.OcioPage)
  },
  {
    path: 'solidario',
    loadComponent: () => import('./paginas/solidario/solidario.page').then( m => m.SolidarioPage)
  },
  {
    path: 'cultura',
    loadComponent: () => import('./paginas/cultura/cultura.page').then( m => m.CulturaPage)
  },
  {
    path: 'academico',
    loadComponent: () => import('./paginas/academico/academico.page').then( m => m.AcademicoPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./paginas/notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  }
];
