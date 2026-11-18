import {Categoria} from "./categoria";

export interface EventoDetalle {
  id: number;
  titulo: string;
  foto: string;
  descripcion: string;
  fechaIni: string;
  fechaLimite: string;
  horaIni: string;
  horaFin: string;
  aforoActual: number;
  aforoMax: number;
  enEspera: number;
  lugar: string;
  cursos: String[];
  categoria: Categoria;
  requisitos: String[];
}

export interface EventoResumen {
  id: number;
  titulo: string;
  foto: string;
  aforoActual: number;
  aforoMax: number;
  enEspera: number;
  colorCategoria: string;
  fechaIni: string;
  fechaLimite: string;
  horaIni: string;
  horaFin: string;
}
