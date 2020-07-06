import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      formularioContacto: {
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        llamarPorTelefono: false,
        mensaje: ""
      },
      trabajos: [
        {
          id: 0,
          titulo: "Kard",
          tipo: "Aplicación web",
          descripcion:
            'Aplicación que entrega herramientas diseñadas para jugadores del juego de cartas intercambiables "Mitos y Leyendas". Tiene capacidad de filtrar cartas por texto y por categorías. Se pueden crear y guardar mazos de cartas, así como compartirlos de manera pública y privada. La herramienta entrega información relevante al jugador de manera gráfica. Para este proyecto, tuve que normalizar la base de datos con scripts de Node.js.',
          fecha: "2020",
          tecnologias: ["Vue", "Vuex", "Firebase", "Quasar", "Node.js"],
          enlace: "https://github.com/nKardia/kard",
          enlaces: {
            web: "kard-37937.web.app",
            github: "https://github.com/nKardia/kard"
          },
          imagen: "../statics/images/kard.png",
          expandido: false
        },
        {
          id: 1,
          titulo: "Otto Klaus",
          tipo: "Aplicación web",
          descripcion:
            "Maqueta de sistema de inventario online. Permite ver artículos en inventario desde una base de datos real alojada en Firebase, así como crear, editar y eliminarlos.",
          fecha: "2020",
          tecnologias: ["Vue", "Vuex", "Firebase", "Quasar"],
          enlace: "https://ottoklaus.web.app/",
          enlaces: {
            web: null,
            github: "https://github.com/nKardia/otto-klaus"
          },
          imagen: "../statics/images/ottoklaus.png",
          expandido: false
        },
        {
          id: 2,
          titulo: "Pokedex",
          tipo: "Aplicación web",
          descripcion:
            "Aplicación que consume datos de una API. Permite al usuario buscar pokemones por ID o nombre, y muestra su información más relevante de manera gráfica.",
          fecha: "2020",
          tecnologias: ["API", "Vanilla JS", "Materialize CSS"],
          enlace: "https://github.com/nKardia/pokedex",
          enlaces: {
            web: null,
            github: "https://github.com/nKardia/pokedex"
          },
          imagen: "../statics/images/pokedex.png",
          expandido: false
        },
        {
          id: 3,
          titulo: "Ferretería Vidal",
          tipo: "E-Commerce",
          descripcion:
            "E-commerce montado en WordPress + WooCommerce para Ferretería Vidal",
          fecha: "2020",
          tecnologias: ["Wordpress", "Woocommerce", "CSS"],
          enlace: "https://www.ferreteriavidal.cl",
          enlaces: {
            web: "https://www.ferreteriavidal.cl",
            github: null
          },
          imagen: "../statics/images/ferreteriavidal.png",
          expandido: false
        }
      ],
      desarrollos: [
        {
          title: "Desarrollo web front-end con Vue.js",
          subtitle: "2020",
          color: "teal",
          icon: "school",
          side: "left",
          body: `
            <p>
              Curso "Desarrollo Web Front-End con Vue.js" en academia Desafío Latam.
            </p>
            <p>
              <strong>Aprendí:</strong> Vue.js, Vuex, Firebase, Bootstrap 4, jQuery, JS (ES6), HTML5, CSS3
            </p>
          `
        },
        {
          title: "Desarrollador freelance",
          subtitle: "2019 - Actualidad",
          color: "blue",
          icon: "business_center",
          side: "right",
          body: `
            <p>
              Proyectos como desarrollador freelance:
              <ul class="desarrollo">
                <li>ferreteriavidal.cl</li>
              </ul> 
            </p>
          `
        },
        {
          title: "Analista desarrollador de software",
          subtitle: "2019",
          color: "teal",
          icon: "school",
          side: "left",
          body: `
            <p>
              Curso "Analista desarrollador de software" en Instituto de Capacitación San Jorge
            </p>
            <p>
              <strong>Aprendí:</strong> 
            </p>
          `
        },
        {
          title: "Python for everybody",
          subtitle: "2018-2019",
          color: "teal",
          icon: "school",
          side: "left",
          body: `
            <p>
              Especialización en programación con Python. Michigan University (vía Coursera.org).
              <ul class="desarrollo">
                <li><a href="https://coursera.org/share/8983f66b9f89eafd40fb1136890a2e62" target="_blank">Programming for Everybody (Getting Started with Python)</a></li>
                <li><a href="https://coursera.org/share/d7a0b9e725795d36491395387f084a96" target="_blank">Python Data Structures</a></li>
                <li><a href="https://coursera.org/share/40b049fce88b9dc165855a08a8110af1" target="_blank">Using Python to Access Web Data</a></li>
                <li><a href="https://coursera.org/share/13b363577a99ef420000b71fb632a25c" target="_blank">Using Databases with Python</a></li>
              </ul> 
            </p>
          `
        },
        {
          title: "Analista de datos",
          subtitle: "2017-2020",
          color: "blue",
          icon: "business_center",
          side: "right",
          body: `
            <p>
              Ingeniero analista de datos en Optimix Plus.
            </p>
          `
        },
        {
          title: "Ingeniero de ejecución industrial",
          subtitle: "2017",
          color: "orange",
          icon: "star",
          side: "left",
          body: `
            <p>
              Titulado de Ingeniería de ejecución industrial, Universidad de Santiago de Chile.
            </p>
          `
        }
      ]
    },
    mutations: {
      SET_FORMULARIO_CONTACTO(state, datosFormulario) {
        state.formularioContacto = datosFormulario;
      }
    },
    actions: {},
    getters: {},

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
