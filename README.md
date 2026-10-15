# TRAZA//CO2

<img src="icons/icon-512.png" alt="Logo de TRAZA//CO2" width="128" height="128">

**Plataforma profesional de movilidad y huella de carbono: KPIs de eficiencia, casos de éxito, normativa de emisiones, certificaciones, ayudas y calculadora de descarbonización.**

Esta aplicación es una Progressive Web App (PWA) diseñada para ayudar a empresas y profesionales del transporte a transicionar hacia una logística sostenible (Logística 5.0). Incluye herramientas clave como una calculadora de impacto y una base de datos de líneas de ayuda y subvenciones.

Desarrollado por **Miguel Ángel Layunta López**.

## Características Principales

*   **9 KPIs Clave:** Indicadores de eficiencia y sostenibilidad para flotas (g CO₂/tkm, Factor de Carga, etc.).
*   **6 Casos de Éxito:** Referencias empresariales reales (DHL, Maersk, SEUR).
*   **Marco Regulatorio:** Normativa europea y española aplicable al transporte (Reglamento UE, Euro 7, ZBE).
*   **7 Líneas de Ayuda:** Información sobre MOVES III, Kit Digital, Fondos CEF, etc.
*   **Calculadora TRAZA//CO2:** Herramienta interactiva para proyectar ahorro operativo y reducción de emisiones con horizontes 2030, 2035 y 2040, incluyendo impacto de ZBE.

## Cómo Usar esta Aplicación

Esta herramienta es una PWA y puede ser usada de tres formas:

1.  **En línea:** Navega a la URL de GitHub Pages (si está configurado).
2.  **Instalada:** Puedes "instalar" la aplicación directamente desde tu navegador (Chrome, Edge, Safari) para tener un acceso directo en tu escritorio o pantalla de inicio, funcionando como una aplicación nativa.
3.  **Fuera de línea:** Gracias a su Service Worker, las características principales cargan incluso sin conexión a internet una vez visitada por primera vez.

## Instalación y Despliegue

### Para desarrollo local

Simplemente descarga o clona este repositorio y abre el archivo `index.html` en tu navegador. Para funciones de PWA, te recomendamos servirlo con un servidor local (como `live-server` de VS Code o Python's `http.server`).

```bash
# Ejemplo con Python
python -m http.server