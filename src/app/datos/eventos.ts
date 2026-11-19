import {EventoCalendario, EventoDetalle, EventoGaleria, EventoResumen} from "../modelos/evento";

export const EVENTOS_GALERIA: EventoGaleria[] = [
  {
    id: 13,
    titulo: 'Recogida de basura',
    grupo: 'Esta semana'
  },
  {
    id: 14,
    titulo: 'Torneo de ajedrez',
    grupo: 'Este mes'
  },
  {
    id: 15,
    titulo: 'Huerto escolar',
    grupo: 'Este año'
  }
]

export const EVENTOS_DETALLE: EventoDetalle[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    foto: 'assets/img/feria-ciencias.jpg',
    descripcion: 'Exposición de los proyectos de Biología y Geología del alumnado de 2º ESO',
    fechaIni: '30/11/2026',
    fechaLimite: '28/11',
    horaIni: '10:00',
    horaFin: '11:30',
    aforoActual: 25,
    aforoMax: 30,
    enEspera: 0,
    lugar: 'Laboratorios',
    cursos: [{id: 8, nombre: '2º ESO'}],
    categoria: { id: 1, nombre: 'Ciencia', icono: 'flask', color: '#33A9FE' },
    requisitos: [{ id: 1, descripcion: 'Traer bata' }, { id: 2, descripcion: 'Traer mascarilla' }],
  }
]

export const EVENTOS_RESUMEN: EventoResumen[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    fechaIni: '30/11/2026',
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
    titulo: 'Torneo de fútbol sala',
    fechaIni: '01/12/2026',
    fechaLimite: '28/11',
    horaIni: '12:00',
    horaFin: '13:30',
    foto: 'assets/img/futbol-sala.jpg',
    colorCategoria: '#FF6200',
    aforoActual: 40,
    aforoMax: 40,
    enEspera: 1
  },
  {
    id: 4,
    titulo: 'Olimpiada matemática',
    fechaIni: '03/12/2026',
    fechaLimite: '30/11',
    horaIni: '09:00',
    horaFin: '11:00',
    foto: 'assets/img/olimpiada-matematica.jpg',
    colorCategoria: '#33A9FE',
    aforoActual: 10,
    aforoMax: 20,
    enEspera: 0
  }
]

export const EVENTOS_CIENCIA: EventoResumen[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    fechaIni: '30/11/2026',
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
    id: 4,
    titulo: 'Olimpiada matemática',
    fechaIni: '03/12/2026',
    fechaLimite: '30/11',
    horaIni: '09:00',
    horaFin: '11:00',
    foto: 'assets/img/olimpiada-matematica.jpg',
    colorCategoria: '#33A9FE',
    aforoActual: 10,
    aforoMax: 20,
    enEspera: 0
  }
]

export const EVENTOS_DEPORTE: EventoResumen[] = [
  {
    id: 2,
    titulo: 'Torneo de fútbol sala',
    fechaIni: '01/12/2026',
    fechaLimite: '28/11',
    horaIni: '12:00',
    horaFin: '13:30',
    foto: 'assets/img/futbol-sala.jpg',
    colorCategoria: '#FF6200',
    aforoActual: 40,
    aforoMax: 40,
    enEspera: 1
  },
  {
    id: 3,
    titulo: 'Torneo de voleibol',
    fechaIni: '05/12/2026',
    fechaLimite: '01/12',
    horaIni: '11:00',
    horaFin: '12:30',
    foto: 'assets/img/voleibol.jpg',
    colorCategoria: '#FF6200',
    aforoActual: 40,
    aforoMax: 40,
    enEspera: 4
  }
]

export const EVENTOS_SOLIDARIO: EventoResumen[] = [
  {
    id: 5,
    titulo: 'Carrera solidaria',
    fechaIni: '03/12/2026',
    fechaLimite: '30/11',
    horaIni: '10:00',
    horaFin: '13:00',
    foto: 'assets/img/carrera-solidaria.jpg',
    colorCategoria: '#16B900',
    aforoActual: 32,
    aforoMax: 50,
    enEspera: 0
  },
  {
    id: 6,
    titulo: 'Festival solidario de Navidad',
    fechaIni: '25/12/2026',
    fechaLimite: '20/12',
    horaIni: '08:00',
    horaFin: '14:30',
    foto: 'assets/img/festival-navidad.jpg',
    colorCategoria: '#16B900',
    aforoActual: 26,
    aforoMax: 40,
    enEspera: 0
  }
]

export const EVENTOS_OCIO: EventoResumen[] = [
  {
    id: 7,
    titulo: 'Yincana de Carnaval',
    fechaIni: '06/12/2026',
    fechaLimite: '03/12',
    horaIni: '08:00',
    horaFin: '12:30',
    foto: 'assets/img/yincana-carnaval.jpg',
    colorCategoria: '#FED533',
    aforoActual: 12,
    aforoMax: 30,
    enEspera: 0
  },
  {
    id: 8,
    titulo: 'Concurso de talentos',
    fechaIni: '04/12/2026',
    fechaLimite: '01/12',
    horaIni: '08:00',
    horaFin: '13:30',
    foto: 'assets/img/concurso-talentos.jpg',
    colorCategoria: '#FED533',
    aforoActual: 11,
    aforoMax: 25,
    enEspera: 0
  }
]

export const EVENTOS_CULTURA: EventoResumen[] = [
  {
    id: 9,
    titulo: 'Encuentro con autor',
    fechaIni: '10/12/2026',
    fechaLimite: '08/12',
    horaIni: '11:30',
    horaFin: '12:30',
    foto: 'assets/img/encuentro-autor.jpg',
    colorCategoria: '#FF6DE4',
    aforoActual: 15,
    aforoMax: 15,
    enEspera: 5
  },
  {
    id: 10,
    titulo: 'Obra teatral',
    fechaIni: '11/12/2026',
    fechaLimite: '09/12',
    horaIni: '10:00',
    horaFin: '11:30',
    foto: 'assets/img/obra-teatral.jpg',
    colorCategoria: '#FF6DE4',
    aforoActual: 54,
    aforoMax: 60,
    enEspera: 0
  }
]

export const EVENTOS_ACADEMICO: EventoResumen[] = [
  {
    id: 11,
    titulo: 'Charla de orientación',
    fechaIni: '05/12/2026',
    fechaLimite: '02/12',
    horaIni: '09:30',
    horaFin: '10:30',
    foto: 'assets/img/charla-orientacion.jpg',
    colorCategoria: '#8E33FE',
    aforoActual: 23,
    aforoMax: 30,
    enEspera: 0
  },
  {
    id: 12,
    titulo: 'Jornada de bienvenida',
    fechaIni: '25/12/2026',
    fechaLimite: '20/12',
    horaIni: '08:00',
    horaFin: '14:30',
    foto: 'assets/img/jornada-bienvenida.jpg',
    colorCategoria: '#8E33FE',
    aforoActual: 30,
    aforoMax: 30,
    enEspera: 0
  }
]

export const EVENTOS_CALENDARIO: EventoCalendario[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    fechaIni: '30 de noviembre de 2026',
    horaIni: '10:00',
    horaFin: '11:30',
    lugar: 'Laboratorios',
    categoria: { id: 1, icono: 'flask', color: '#33A9FE' },
  }
]

export const MIS_EVENTOS: EventoCalendario[] = [
  {
    id: 1,
    titulo: 'Feria de ciencias',
    fechaIni: '30/11/2026',
    horaIni: '10:00',
    horaFin: '11:30',
    lugar: 'Laboratorios',
    categoria: { id: 1, icono: 'flask', color: '#33A9FE' },
  }
]
