export interface Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  rol: 'ADMINISTRADOR' | 'ORGANIZADOR' | 'ESTUDIANTE'
  email: string;
  contrasena: string;
}

export interface UsuarioInscrito {
  id: number;
  nombre: string;
  apellidos: string;
  rol: 'ADMINISTRADOR' | 'ORGANIZADOR' | 'ESTUDIANTE';
  curso: string;
}
