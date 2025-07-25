import { variables } from "../styles/variables";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

//Data de usuario
export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <variables.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <variables.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <variables.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];

//Data de la primer lista de navegaciones en SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <variables.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <variables.iconoreportes />,
    to: "/reportes",
  },
 
];

//Data de la segunda lista de navegaciones en SIDEBAR
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },

];

//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"registra tus productos",
    icono:"https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://i.ibb.co/5vgZ0fX/hombre.png",
    link:"/configurar/usuarios",
   
  },

  {
    title:"Tu empresa",
    subtitle:"configura tus opciones básicas",
    icono:"https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://i.ibb.co/VYbMRLZ/categoria.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link:"/configurar/marca",
   
  },

]

//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];

//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];