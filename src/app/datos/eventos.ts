import {EventoDetalle, EventoResumen} from "../modelos/evento";

export const EVENTOS_DETALLE: EventoDetalle[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    foto: 'assets/img/feria-ciencias.jpg',
    descripcion: 'Exposición de los proyectos de Biología y Geología del alumnado de 2º ESO.',
    fechaIni: '30/11',
    fechaLimite: '28/11',
    horaIni: '10:00',
    horaFin: '11:30',
    aforoActual: 25,
    aforoMax: 30,
    enEspera: 0,
    lugar: 'Laboratorios',
    cursos: ['2º ESO'],
    categoria: { id: 1, nombre: 'Ciencia', icono: 'flask', color: '#33A9FE'},
    requisitos: ['Traer bata', 'Traer mascarilla'],
  }
]

export const EVENTOS_RESUMEN: EventoResumen[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    fechaIni: '30/11',
    fechaLimite: '28/11',
    horaIni: '10:00',
    horaFin: '11:30',
    foto: 'assets/img/feria-ciencias.jpg',
    colorCategoria: '#33A9FE',
    aforoActual: 25,
    aforoMax: 30,
    enEspera: 0
  },
  {
    id: 2,
    titulo: 'Feria de ciencias',
    fechaIni: '30/11',
    fechaLimite: '28/11',
    horaIni: '10:00',
    horaFin: '11:30',
    foto: 'assets/img/feria-ciencias.jpg',
    colorCategoria: '#33A9FE',
    aforoActual: 25,
    aforoMax: 30,
    enEspera: 0
  }
]
