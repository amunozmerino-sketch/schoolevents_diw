import {Usuario} from "./usuario";

export interface Publicacion {
  id: number;
  texto: string;
  id_usuario: number;
  id_evento: number;
  publicada: string;
  editada: boolean;
}
