# HistroSoft — Consultoría de Software

Página web de consultoría de software para empresas: páginas web, CRM, ERP, aplicaciones móviles y automatizaciones a la medida.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o bun

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <tu-repositorio>
   cd HistroSoft-Home-Page
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   ```bash
   cp .env.example .env
   ```
   Luego edita el archivo `.env` con tus valores:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   APP_URL=http://localhost:3000
   ```

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build

Para crear una versión optimizada para producción:

```bash
npm run build
```

## Tecnologías

- **React 19** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS 4** - Utilidades CSS
- **TypeScript** - Type safety
- **Lucide React** - Iconos
- **Express** - Servidor backend

## Estructura del Proyecto

```
src/
├── components/      # Componentes React
│   ├── layout/      # Componentes de diseño
│   ├── sections/    # Secciones de la página
│   ├── ui/          # Componentes UI reutilizables
│   └── ...
├── data/            # Datos estáticos
├── context/         # Context API
├── types/           # Tipos TypeScript
└── main.tsx         # Punto de entrada
```

## Licencia

Todos los derechos reservados.
