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
        loadComponent: () => import('./paginas/eventos/eventos.page').then( m => m.EventosPage),
      },
      {
        path: 'eventos/proximos',
        loadComponent: () => import('./paginas/proximos/proximos.page').then( m => m.ProximosPage)
      },
      {
        path: 'eventos/deporte',
        loadComponent: () => import('./paginas/deporte/deporte.page').then(m => m.DeportePage)
      },
      {
        path: 'eventos/ciencia',
        loadComponent: () => import('./paginas/ciencia/ciencia.page').then(m => m.CienciaPage)
      },
      {
        path: 'eventos/ocio',
        loadComponent: () => import('./paginas/ocio/ocio.page').then( m => m.OcioPage)
      },
      {
        path: 'eventos/solidario',
        loadComponent: () => import('./paginas/solidario/solidario.page').then( m => m.SolidarioPage)
      },
      {
        path: 'eventos/cultura',
        loadComponent: () => import('./paginas/cultura/cultura.page').then( m => m.CulturaPage)
      },
      {
        path: 'eventos/academico',
        loadComponent: () => import('./paginas/academico/academico.page').then( m => m.AcademicoPage)
      },
      {
        path: 'mis-eventos/crear',
        loadComponent: () => import('./paginas/evento-nuevo/evento-nuevo.page').then( m => m.EventoNuevoPage)
      },
      {
        path: 'mis-eventos/:id',
        loadComponent: () => import('./paginas/evento-editar/evento-editar.page').then( m => m.EventoEditarPage)
      },
      {
        path: 'asistencia',
        loadComponent: () => import('./paginas/lista-asistencia/lista-asistencia.page').then( m => m.ListaAsistenciaPage)
      },
      {
        path: 'asistencia/:id',
        loadComponent: () => import('./paginas/lista-asistencia-detalle/lista-asistencia-detalle.page').then( m => m.ListaAsistenciaDetallePage)
      },
      {
        path: 'eventos/:id',
        loadComponent: () => import('./paginas/evento-detalle/evento-detalle.page').then( m => m.EventoDetallePage)
      },
      {
        path: 'galeria',
        loadComponent: () => import('./paginas/galeria/galeria.page').then( m => m.GaleriaPage)
      },
      {
        path: 'galeria/:id/publicaciones',
        loadComponent: () => import('./paginas/publicaciones/publicaciones.page').then( m => m.PublicacionesPage)
      },
      {
        path: 'galeria/:id/publicaciones/crear',
        loadComponent: () => import('./paginas/publicacion-nueva/publicacion-nueva.page').then( m => m.PublicacionNuevaPage)
      },
      {
        path: 'calendario',
        loadComponent: () => import('./paginas/calendario/calendario.page').then( m => m.CalendarioPage)
      },
      {
        path: 'mis-eventos',
        loadComponent: () => import('./paginas/mis-eventos/mis-eventos.page').then( m => m.MisEventosPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then( m => m.PerfilPage)
      },
      {
        path: '**',
        loadComponent: () => import('./paginas/no-encontrada/no-encontrada.page').then( m => m.NoEncontradaPage)
      },
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
    path: 'notificaciones',
    loadComponent: () => import('./paginas/notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  }
];
