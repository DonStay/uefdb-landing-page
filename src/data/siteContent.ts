export const STORAGE_KEY = "don-bosco-content-v1";

const base = import.meta.env.BASE_URL || "/";
const withBase = (path: string) => `${base}${path.replace(/^\/+/, "")}`;

export const defaultSiteContent = {
  siteLogo: withBase("/images/DBLOGO.png"),
  aboutImage: withBase("/images/DBLOGO.png"),
  programImages: [
    withBase("/images/inicial-juegos.webp"),
    withBase("/images/basica.jpg"),
    withBase("/images/bachillerato.jpg")
  ],
  heroSlides: [
    {
      image: withBase("/images/colegio.png"),
      eyebrow: "BIENVENIDOS A LA",
      title: "Unidad Educativa Fiscomisional Don Bosco de Esmeraldas",
      
    },
    {
      image: withBase("/images/escuela.png"),
      eyebrow: "EDUCACIÓN CON SENTIDO",
      title: "Una comunidad que aprende, crea y transforma",
      text: "Acompañamos a nuestros estudiantes en su crecimiento académico, humano y espiritual."
    },
    {
      image: withBase("/images/logo.png"),

    }
  ],
  newsItems: [
    {
      date: "25 de Septiembre de 2026",
      title: "Jurameto a la Bandera",
      text: "Con gran entusiasmo nuestros estudiantes reafirmaron con orgullo su compromiso y respeto por la Patria.",
      image: withBase("/images/juramento.jpg")
    },
    {
      date: "11 de agosto de 2026",
      title: "Posicionamiento del Consejo Estudiantil 2026-2027",
      text: "Un nuevo liderazgo comienza con compromiso, unidad y servicio a nuestra comunidad educativa.",
      image: withBase("/images/consejo.jpg")
    },
    {
      date: "14 de agosto de 2026",
      title: "Amistoso deportivos",
      text: "Una jornada llena de compañerismo, esfuerzo y pasión por el deporte..",
      image: withBase("/images/amistosos.jpeg")
    },
    {
      date: "27 de agosto de 2026",
      title: "Primer concurso interno de Oratoria",
      text: "Nuestros estudiantes demostraron talento, seguridad y el poder de expresar sus ideas.",
      image: withBase("/images/oratoriaa.jpeg")
    }
  ],
  teamMembers: [
    {
      role: "Rectora",
      name: "Dra. María Isabel Fajardo",
      description: "La Dra. María Isabel Fajardo es la rectora de la Unidad Educativa Fiscomisional Don Bosco de Esmeraldas. Su labor está vinculada a la dirección y gestión de una institución educativa de orientación católica y salesiana, enfocada en la formación académica, humana y cristiana de sus estudiantes. Bajo su liderazgo, la institución promueve valores como la responsabilidad, el respeto, la solidaridad y el compromiso con la comunidad",
      image: withBase("/images/rectora.jpg")
    },
    {
      role: "Delegada del Obispo",
      name: "Ing. Mercedes Sánchez Macía",
      description: "Ing. Mercedes Sánchez Macías, Delegada del Obispo, representa al Obispo dentro de la institución y acompaña la gestión educativa desde la dimensión pastoral y eclesial, velando por que la misión y los valores de la Iglesia estén presentes en la comunidad educativa.",
      image: withBase("/images/delegada.jpg")
    },
    {
      role: "Vicerrectora - Matutina",
      name: "MSc. Mónica Tarira España",
      description: "MSc. Mónica Tarira España, Vicerrectora de la jornada matutina, es la autoridad encargada de acompañar y coordinar la gestión académica y formativa de la institución durante la jornada matutina. Su trayectoria está vinculada al ámbito educativo y a la planificación y seguimiento de los procesos pedagógicos",
      image: withBase("/images/vicemñn.jpg")
    },
    {
      role: "Vicerrectora - Vespertina",
      name: "MSc. Betty Verduga Álvarez",
      description: "MSc. Betty Verduga Álvarez, Vicerrectora de la jornada vespertina, desempeña la función de vicerrectora de la jornada vespertina, apoyando la gestión académica y administrativa y el acompañamiento de estudiantes y docentes durante esta jornada.",
      image: withBase("/images/vicetrd.jpg")
    }
    
  ],
  honorBoards: [
    {
      shift: "Matutina",
      groups: [
        {
          role: "Abanderada del Pabellòn Nacional",
          student: { name: "Lopez Saltos María Rafaela", course: "3ero BGU A", image: withBase("/images/1aband.jpg") },
          escorts: [
            { name: "Montaño Carrion Gaeli Saruka", course: "3ero BGU A", image: withBase("/images/escolecu.jpg") },
            { name: "Montaño Vasquez Sara Valentina", course: "3ero BGU D", image: withBase("/images/2escol.jpg") }
          ]
        },
        {
          role: "Portaestandarte de la ciudad",
          student: { name: "Morales Alcivar Gustavo Isaias", course: "", image: withBase("/images/portaesme1.jpg") },
          escorts: [
            { name: "Zambrano Morillo Saùl Valentin", course: "3ero BGU D", image: withBase("/images/escolesme1.jpg") },
            { name: "Morcillo Cortez Carlos Eduardo", course: "3ero BGU B", image: withBase("/images/escolesme2mñn.jpg") }
          ]
        },
        {
          role: "Portaestandarte del  plantel",
          student: { name: "Moreno Vàsconez Lisbeth Adelaine", course: "", image: withBase("/images/portainsti1.jpg") },
          escorts: [
            { name: "Àlvarez Claudia Isabella", course: "3ero BGU B", image: withBase("/images/escolinsiti1mñn.jpg") },
            { name: "Villafuerte Sosa Edith Yuliana ", course: "", image: withBase("/images/escolinsti2mñn.jpg") }
          ]
        }
      ]
    },
    {
      shift: "Vespertina",
      groups: [
        {
          role: "Abanderado del Pabellòn Nacional",
          student: { name: "Bastidas Baque Bryan Leandro", course: "3ero B.T. B", image: withBase("/images/Bryan.jpg") },
          escorts: [
            { name: "Plaza Verduga Kristhel Mishelle", course: "3ero B.T. A", image: withBase("/images/mishelle.jpg") },
            { name: "Loor Garcìa Jaslene Naima", course: "3ero BGU A", image: withBase("/images/jaslene.jpg") }
          ]
        },
        {
          role: "Portaestandarte de la ciudad",
          student: { name: "Ortega Trujillo Valentina Isabel", course: "3ero B.T. A", image: withBase("/images/portaesme2.jpg") },
          escorts: [
            { name: "Montaño Luna Paulette Ninoska", course: "3ero BGU A", image: withBase("/images/escolesme1tarde.jpg") },
            { name: "Garcia Montaño Christopher Nahin", course: "3ero B.T. A", image: withBase("/images/escolesmetarde2.jpg") }
          ]
        },
        {
          role: "Portaestandarte del plantel",
          student: { name: "Dìaz Jumbo Jan Mateo", course: "3ero B.T. B", image: withBase("/images/mateo.jpg") },
          escorts: [
            { name: "Muñoz Chila Damarys Valeuska", course: "3ero BGU A", image: withBase("/images/damarys.jpg") },
            { name: "Olarte Soliz Ariana Nicole", course: "3ero BGU A", image: withBase("/images/solis.jpg") }
          ]
        }
      ]
    }
  ],
  galleryPhotos: Array.from({ length: 4 }, (_, i) => ({
    src: withBase(`/images/gallery-${(i % 4) + 1}.png`),
    title: ["Participaciones provinciales", "Deportes", "Tecnología", "Comunidad"][i % 4],
    videoUrl: i === 0 ? "https://www.facebook.com/reel/26284409791257226/" : undefined
  }))
};

export const siteLogo = defaultSiteContent.siteLogo;
export const aboutImage = defaultSiteContent.aboutImage;
export const heroSlides = defaultSiteContent.heroSlides;
export const newsItems = defaultSiteContent.newsItems;
export const teamMembers = defaultSiteContent.teamMembers;
export const galleryPhotos = defaultSiteContent.galleryPhotos;

export function getStoredSiteContent() {
  if (typeof window === "undefined" || !window.localStorage) {
    return defaultSiteContent;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultSiteContent;
  }

  try {
    const parsed = JSON.parse(raw);
    return { ...defaultSiteContent, ...parsed };
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: typeof defaultSiteContent) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}
