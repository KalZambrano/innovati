import ChartUp from '@/assets/icons/chart-up.svg'
import Clock from "@/assets/icons/clock.svg";
import Puzzle from "@/assets/icons/puzzle.svg";
import UserShield from "@/assets/icons/user-shield.svg";

import AIService from "@/assets/icons/artificial-intelligence.svg";
import CloudService from "@/assets/icons/cloud-services.svg";
import CustomerService from "@/assets/icons/customer-service.svg";
import HardwareChip from "@/assets/icons/hardware-chip.svg";
import ShieldLock from "@/assets/icons/shield-lock.svg";
import LaptopIcon from "@/assets/icons/laptop.svg";
import Automation from "@/assets/icons/automation.svg";
import Layers from '@/assets/icons/layers.svg'

export const SITE = {
  name: "InnovaTI",
  tagline: "Soluciones Informáticas",
  description:
    "Gestionamos tu tecnología para que te concentres en hacer crecer tu negocio.",
  email: "info@innovatisoluciones.com",
  website: "www.innovatisoluciones.com",
  phone: "+51 954 644 519",
  location: "Lima – Perú",
};

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  image?: string;
}

export const SERVICES: Service[] = [
  {
    id: "outsourcing",
    title: "Outsourcing TI",
    description:
      "Nos encargamos de la gestión tecnológica de tu empresa para mantener una operación estable, segura y sin interrupciones.",
    icon: CustomerService,
    features: [
      "Soporte técnico remoto y presencial",
      "Gestión de usuarios y accesos",
      "Administración de plataformas empresariales",
      "Monitoreo y mantenimiento preventivo",
      "Documentación y control de activos",
      "Atención y seguimiento de incidencias",
    ],
    image: "/images/service-outsourcing.jpg",
  },
  {
    id: "infraestructura",
    title: "Infraestructura y Redes",
    description:
      "Diseñamos, implementamos y administramos infraestructura tecnológica para garantizar la disponibilidad de los sistemas.",
    icon: Layers,
    features: [
      "Redes empresariales (Switching, WiFi, VPN)",
      "Servidores físicos y virtuales",
      "Directorio corporativo",
      "Cableado estructurado y fibra óptica",
      "Respaldo y recuperación de información",
      "UPS y continuidad operativa",
    ],
    image: "/images/service-infra.jpg",
  },
  {
    id: "seguridad",
    title: "Seguridad Informática",
    description:
      "Implementamos controles y soluciones de seguridad para reducir riesgos y proteger la información empresarial.",
    icon: ShieldLock,
    features: [
      "Protección de equipos, usuarios e información",
      "Seguridad de correo electrónico",
      "Autenticación multifactor (MFA)",
      "Monitoreo de eventos de seguridad",
      "Protección de plataformas cloud",
      "Respaldo y recuperación de información",
    ],
    image: "/images/service-security.jpg",
  },
  {
    id: "automatizacion",
    title: "Automatización e IA",
    description:
      "Ayudamos a las empresas a optimizar procesos mediante automatización e inteligencia artificial.",
    icon: Automation,
    features: [
      "Flujos de aprobación y validación",
      "Procesos administrativos automatizados",
      "Chatbots para atención y soporte",
      "Integración entre plataformas",
      "Generación automática de reportes",
      "Alertas y notificaciones inteligentes",
    ],
    image: "/images/service-automation.jpg",
  },
  {
    id: "cloud",
    title: "Servicios Cloud y Hosting",
    description:
      "Soluciones en la nube para acceder a la información de forma segura y mantener la continuidad operativa.",
    icon: CloudService,
    features: [
      "Correo corporativo",
      "Plataformas de colaboración",
      "Hosting corporativo",
      "Certificados SSL",
      "Respaldo en la nube",
      "Monitoreo y soporte",
    ],
    image: "/images/service-cloud.jpg",
  },
  {
    id: "equipos",
    title: "Equipos y Software",
    description:
      "Ayudamos a equipar a tus colaboradores con hardware y software confiable y alineado a sus necesidades.",
    icon: HardwareChip,
    features: [
      "Laptops y computadoras empresariales",
      "Monitores e impresoras",
      "Licencias de software empresarial",
      "Soluciones de seguridad",
      "Equipamiento para trabajo remoto",
      "Asesoría en selección tecnológica",
    ],
    image: "/images/service-hardware.jpg",
  },
  {
    id: "renting",
    title: "Renting Tecnológico",
    description:
      "Equipos bajo modalidad de alquiler para acceder a tecnología moderna sin comprometer capital.",
    icon: LaptopIcon,
    features: [
      "Laptops y computadoras empresariales",
      "Equipos para proyectos temporales",
      "Equipamiento para nuevos colaboradores",
      "Renovación tecnológica programada",
      "Soporte y acompañamiento técnico",
    ],
    image: "/images/service-renting.jpg",
  },
  {
    id: "chatbots",
    title: "Chatbots e Inteligencia Artificial",
    description:
      "Automatizamos la atención y gestión de consultas mediante asistentes virtuales.",
    icon: AIService,
    features: [
      "Chatbots para atención al cliente",
      "Automatización de respuestas frecuentes",
      "Integración con WhatsApp",
      "Asistentes virtuales para procesos internos",
    ],
    image: "/images/service-chatbots.jpg",
  },
];

export interface Commitment {
  title: string;
  description: string;
  icon: any;
}

export const COMMITMENTS: Commitment[] = [
  {
    title: "Mejora Continua",
    description: "Buscamos optimizar procesos y reducir riesgos tecnológicos.",
    icon: ChartUp,
  },
  {
    title: "Soluciones Prácticas",
    description: "Tecnología alineada a las necesidades del negocio.",
    icon: Puzzle,
  },
  {
    title: "Atención Oportuna",
    description:
      "Resolvemos incidencias y acompañamos la operación diaria.",
    icon: Clock,
  },
  {
    title: "Responsabilidad Operativa",
    description:
      "Asumimos la gestión tecnológica con criterio y seguimiento continuo.",
    icon: UserShield,
  },
];

export const STATS = [
  { value: "100+", label: "Clientes atendidos" },
  { value: "99%", label: "Uptime garantizado" },
  { value: "8+", label: "Años de experiencia" },
  { value: "24/7", label: "Soporte disponible" },
];
