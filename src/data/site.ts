import ChartUp from '@/assets/icons/chart-up.svg'
import PhoneCall from '@/assets/icons/phone-call.svg'
import Target from '@/assets/icons/target-line.svg'
import ShieldCheck from '@/assets/icons/check-shield.svg'
import Headphones from '@/assets/icons/headphones.svg'
import LayoutGrid from '@/assets/icons/layout-grid.svg'

import AIService from "@/assets/icons/artificial-intelligence.svg";
import CloudService from "@/assets/icons/cloud-services.svg";
import CustomerService from "@/assets/icons/customer-service.svg";
import HardwareChip from "@/assets/icons/hardware-chip.svg";
import ShieldLock from "@/assets/icons/shield-lock.svg";
import LaptopIcon from "@/assets/icons/laptop.svg";
import Automation from "@/assets/icons/automation.svg";
import Layers from '@/assets/icons/layers.svg'

import Building from "@/assets/icons/building.svg";
import MonitorCheck from "@/assets/icons/monitor-check.svg";
import Puzzle from "@/assets/icons/puzzle.svg";

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
      "Convertimos la gestión tecnológica en un servicio administrado. Nos encargamos del soporte a usuarios, mantenimiento preventivo, inventario de activos, administración de cuentas, infraestructura y mesa de ayuda para que tu empresa pueda operar con tranquilidad.",
    icon: CustomerService,
    features: [
      "Soporte remoto y presencial",
      "Mesa de ayuda",
      "Administración de usuarios",
      "Gestión de infraestructura",
      "Mantenimiento preventivo",
      "Inventario tecnológico",
    ],
  },
  {
    id: "infraestructura",
    title: "Infraestructura Tecnológica",
    description:
      "Diseñamos, implementamos y administramos plataformas que permiten mantener una operación estable, segura y preparada para crecer.",
    icon: Layers,
    features: [
      "Redes empresariales",
      "WiFi corporativo",
      "Cableado estructurado",
      "Servidores",
      "Virtualización",
      "Active Directory",
      "VPN",
      "Storage",
      "Respaldos",
      "Continuidad operativa"
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad Informática",
    description:
      "Protegemos la información y los accesos de tu empresa mediante buenas prácticas y herramientas orientadas a reducir riesgos y fortalecer la continuidad del negocio.",
    icon: ShieldLock,
    features: [
      "Antivirus empresarial",
      "Protección de correo",
      "Microsoft 365 Security",
      "Autenticación multifactor (MFA)",
      "Control de accesos",
      "Respaldos",
      "Monitoreo",
      "Recomendaciones de seguridad",
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización e Inteligencia Artificial",
    description:
      "Reducimos tareas repetitivas y optimizamos procesos mediante flujos automatizados e integraciones que permiten ahorrar tiempo y mejorar la productividad.",
    icon: Automation,
    features: [
      "Power Automate",
      "n8n",
      "Integraciones entre sistemas",
      "Automatización documental",
      "Chatbots",
      "Notificaciones automáticas",
      "Optimización de procesos empresariales",
    ],
  },
  {
    id: "cloud",
    title: "Soluciones Cloud",
    description:
      "Facilitamos la adopción y administración de servicios en la nube para mejorar la colaboración, la disponibilidad y la seguridad de la información.",
    icon: CloudService,
    features: [
      "Microsoft 365",
      "Azure",
      "Google Workspace",
      "Correo empresarial",
      "Migraciones",
      "Hosting",
      "Respaldos Cloud",
    ],
  },
  {
    id: "equipos",
    title: "Ventas de Equipos y Software",
    description:
      "Asesoramos a tu empresa en la adquisición de tecnología alineada a sus necesidades operativas, evitando inversiones innecesarias y facilitando el crecimiento de la infraestructura.",
    icon: HardwareChip,
    features: [
      "Laptops y PCs",
      "Servidores",
      "Monitores",
      "Impresoras",
      "Licencias",
      "Software empresarial",
      "Periféricos",
    ],
  },
  {
    id: "renting",
    title: "Renting Tecnológico",
    description:
      "Renueva la tecnología de tu empresa mediante cuotas mensuales que incluyen soporte y acompañamiento, permitiéndote mantener equipos actualizados sin realizar una inversión inicial elevada.",
    icon: LaptopIcon,
    features: [
      ""
    ],
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

export const BEFORE_INNOVA = [
  "Diferentes proveedores para cada servicio.",
  "Respuestas lentas ante incidentes.",
  "Infraestructura sin documentación.",
  "Equipos sin mantenimiento preventivo.",
  "Procesos manuales.",
  "Crecimiento tecnológico desordenado.",
  "Falta de seguimiento y control.",
];

export const AFTER_INNOVA = [
  "Un solo proveedor para toda la tecnología.",
  "Atención coordinada y soporte continuo.",
  "Infraestructura organizada y documentada.",
  "Equipos administrados de forma preventiva.",
  "Procesos automatizados.",
  "Tecnología alineada al crecimiento del negocio.",
  "Acompañamiento permanente.",
];

export const BENEFITS = [
  {
    icon: PhoneCall,
    title: "Un solo punto de contacto",
    description:
      "Olvídate de coordinar con varios proveedores. Centralizamos la gestión tecnológica para simplificar la comunicación y acelerar la solución de incidentes.",
  },
  {
    icon: Target,
    title: "Tecnología alineada con tu negocio",
    description:
      "Cada decisión tecnológica se toma considerando las necesidades y objetivos de tu empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Continuidad operativa",
    description:
      "Trabajamos para reducir interrupciones y mantener disponibles los recursos tecnológicos que tu organización necesita para operar.",
  },
  {
    icon: Headphones,
    title: "Soporte cercano",
    description:
      "Acompañamos a tu empresa con atención remota y presencial, brindando seguimiento continuo a cada requerimiento.",
  },
  {
    icon: ChartUp,
    title: "Escalabilidad",
    description:
      "Diseñamos soluciones que pueden crecer junto con tu empresa, evitando cambios innecesarios en el futuro.",
  },
  {
    icon: LayoutGrid,
    title: "Optimización de recursos",
    description:
      "Una gestión adecuada permite aprovechar mejor la infraestructura existente y planificar nuevas inversiones de manera más eficiente.",
  },
];

export const HERO_BENEFITS = [
  {
    icon: Building,
    label: "Un solo proveedor para toda tu tecnología",
  },
  {
    icon: MonitorCheck,
    label: "Soporte remoto y presencial",
  },
  {
    icon: Puzzle,
    label: "Soluciones adaptadas al crecimiento de tu empresa",
  },
  {
    icon: ShieldCheck,
    label: "Acompañamiento continuo para mantener tu operación disponible",
  },
];

export const CHALLENGES = [
  {
    title: "Soporte lento o inexistente",
    description:
      "Cuando ocurre una falla, encontrar quién pueda resolverla rápidamente se convierte en un problema que afecta la productividad de todo el equipo.",
  },
  {
    title: "Múltiples proveedores sin coordinación",
    description:
      "Cada proveedor administra una parte de la infraestructura y, cuando surge un incidente, nadie asume la responsabilidad completa.",
  },
  {
    title: "Crecimiento tecnológico sin planificación",
    description:
      "Con el tiempo se incorporan nuevos equipos, usuarios y sistemas sin una estrategia clara, generando desorden y mayores costos de administración.",
  },
  {
    title: "Riesgos de seguridad",
    description:
      "Contraseñas débiles, accesos sin control, equipos desactualizados o respaldos inexistentes pueden comprometer la continuidad del negocio.",
  },
  {
    title: "Procesos manuales",
    description:
      "Muchas tareas repetitivas consumen tiempo que podría dedicarse a actividades de mayor valor para la empresa.",
  },
  {
    title: "Falta de un área especializada de TI",
    description:
      "No todas las empresas necesitan un departamento interno de tecnología, pero sí requieren contar con un equipo que responda cuando más lo necesitan.",
  },
];

export const STATS = [
  { value: "100+", label: "Clientes atendidos" },
  { value: "99%", label: "Uptime garantizado" },
  { value: "8+", label: "Años de experiencia" },
  { value: "24/7", label: "Soporte disponible" },
];
