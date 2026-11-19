import {EventoDetalle} from "./evento";

export interface Requisito {
  id: number;
  descripcion: string;
  evento: number;
}

export interface RequisitoResumen {
  id: number;
  descripcion: string;
}
