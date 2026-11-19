import {Usuario, UsuarioInscrito} from "../modelos/usuario";

export const USUARIOS: Usuario[] = [
  {
    id: 1,
    nombre: "Ana",
    apellidos: "Camacho Barrio",
    rol: "ORGANIZADOR",
    email: "acamacho@salesianos.es",
    contrasena: "12345678"
  },
  {
    id: 2,
    nombre: "Jaime",
    apellidos: "Fuertes García",
    rol: "ESTUDIANTE",
    email: "jfuertes@salesianos.es",
    contrasena: "12345678"
  },
  {
    id: 3,
    nombre: "Juan",
    apellidos: "Escribano Coto",
    rol: "ADMINISTRADOR",
    email: "jescribano@salesianos.es",
    contrasena: "12345678"
  }
]

export const USUARIO_INSCRITOS: UsuarioInscrito[] = [
  {
    id: 1,
    nombre: "Ana",
    apellidos: "Camacho Barrio",
    rol: "ORGANIZADOR",
    curso: "2º Bachillerato de Humanidades"
  },
  {
    id: 2,
    nombre: "Jaime",
    apellidos: "Fuertes García",
    rol: "ESTUDIANTE",
    curso: "2º Bachillerato de Ciencias"
  }
]
