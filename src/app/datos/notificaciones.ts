import {Notificacion} from "../modelos/notificacion";

export const NOTIFICACIONES: Notificacion[] = [
  {
    id: 1,
    mensaje: "“Convivencia escolar” empieza en 1 hora.",
    tipo: "info",
    grupo: "Hoy",
    leida: false
  },
  {
    id: 2,
    mensaje: "“Reunión consejo estudiantil” ha sido cancelado.",
    tipo: "alerta",
    grupo: "Esta semana",
    leida: false
  },
  {
    id: 3,
    mensaje: "¡Plaza obtenida para “Obra de teatro”!",
    tipo: "confirmacion",
    grupo: "Este mes",
    leida: true
  },
  {
    id: 4,
    mensaje: "“Obra de teatro” cambio de hora inicio a 10:00.",
    tipo: "aviso",
    grupo: "Este mes",
    leida: true
  }
]
