import {Categoria, CategoriaCalendario} from "./categoria";
import {RequisitoResumen} from "./requisito";
import {Curso} from "./curso";

export interface EventoGaleria {
  id: number;
  titulo: string;
  grupo: string;
}

export interface EventoCalendario {
  id: number;
  titulo: string;
  lugar: string;
  fechaIni: string;
  horaIni: string;
  horaFin: string;
  categoria: CategoriaCalendario;
}

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
  cursos: Curso[];
  categoria: Categoria;
  requisitos: RequisitoResumen[];
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
