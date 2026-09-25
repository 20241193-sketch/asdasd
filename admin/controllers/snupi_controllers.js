// Lista de objetos/elementos relacionados con Snoopy
export function home(req, res) {
  let snupi = [
    {
      id: 1,
      nombre: "Casita roja",
      categoria: "Accesorios / Escenario",
      descripcion: "La icónica casa de perro roja sobre la cual Snoopy duerme y sueña.",
      esInfaltable: true
    },
    {
      id: 2,
      nombre: "Gafas de sol de Joe Cool",
      categoria: "Accesorios",
      descripcion: "Gafas de sol oscuras que usa cuando adopta su alter ego universitario y relajado.",
      esInfaltable: true
    },
    {
      id: 3,
      nombre: "Máquina de escribir",
      categoria: "Objetos",
      descripcion: "Máquina de escribir portátil que usa en el techo de su casa para redactar novelas.",
      esInfaltable: false
    },
    {
      id: 4,
      nombre: "Atavío de Piloto de la Primera Guerra Mundial",
      categoria: "Ropa",
      descripcion: "Casco de aviador, antiparras y bufanda roja para combatir al Barón Rojo.",
      esInfaltable: true
    },
    {
      id: 5,
      nombre: "Woodstock (Emilio)",
      categoria: "Compañero",
      descripcion: "Su fiel amigo, un pequeño pájaro amarillo que le sirve de secretario y aliado.",
      esInfaltable: true
    },
    {
      id: 6,
      nombre: "Plato de comida rojo",
      categoria: "Objetos",
      descripcion: "Su plato habitual para comer, el cual suele sostener con la boca cuando tiene hambre.",
      esInfaltable: false
    },
    {
      id: 7,
      nombre: "Uniforme del Scout Sabueso (Beagle Scout)",
      categoria: "Ropa",
      descripcion: "Sombrero de campamento y pañuelo para liderar sus excursiones con las aves.",
      esInfaltable: false
    }

];

return res.render('admin/snupi', {
    title: 'Snupi',
    snupi: snupi,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });

}