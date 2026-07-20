# Guía maestra del sitio web

## Estado actual

Versión 1.5 — Sprint WEB-05.5 lista para validación y publicación.

## Arquitectura

- `index.html`: estructura, contenido, metadatos sociales y datos estructurados.
- `assets/css/styles.css`: sistema visual y adaptación responsiva.
- `assets/img/logo/logotipo-sra.png`: logotipo institucional optimizado para web.
- `assets/img/social/og-seresidencial-apizaco.jpg`: imagen de vista previa social 1200 × 630 px.
- `assets/icons/favicon.ico`: favicon compatible.
- `assets/icons/favicon-16x16.png` y `favicon-32x32.png`: iconos de navegador.
- `assets/icons/apple-touch-icon.png`: icono para dispositivos Apple.
- `assets/icons/icon-192.png` y `icon-512.png`: iconos del manifiesto web.
- `assets/icons/site.webmanifest`: identidad básica para instalación web.
- `assets/js/`: reservado para funciones futuras.
- `docs/`: instrucciones operativas de publicación.

## Sprint WEB-05.5

Alcance ejecutado:

- Identidad visual en pestaña, favoritos y dispositivos.
- Vista previa institucional para WhatsApp y redes sociales.
- SEO técnico y datos estructurados.
- Sitemap actualizado.
- Sin cambios al contenido visible, diseño o navegación.

## Validación después de publicar

1. Abrir la URL y confirmar el favicon.
2. Compartir la URL por WhatsApp y comprobar título, descripción e imagen.
3. Confirmar que `robots.txt` y `sitemap.xml` sean accesibles.
4. Mantener las rutas de archivos al publicar; Open Graph usa URLs absolutas.

## Regla de mantenimiento

Cada cambio debe conservar:

1. funcionamiento sin errores;
2. adaptación móvil;
3. datos de contacto;
4. enlaces de WhatsApp;
5. metadatos de identidad digital;
6. documentación y número de versión actualizados.


## WEB-05.5.1

Corrección del enlace de marca: el destino `#inicio` se ubica en el encabezado completo para evitar que este quede fuera de la vista al pulsar el logotipo.

### WEB-05.5.1 — Encabezado Inteligente
El encabezado es fijo y adapta su altura al desplazamiento. El logotipo funciona como acceso permanente al inicio; Servicios, Contacto y teléfono permanecen disponibles durante toda la navegación.

## WEB-05.6 — Optimización visual del Hero

- Alcance limitado a la portada principal y su comportamiento responsivo.
- Sin cambios de contenido, estructura funcional, enlaces o catálogo de servicios.
- Base de publicación: versión WEB-05.5.1 aprobada y publicada.
- Resultado esperado: mayor equilibrio visual, mejor lectura y presencia profesional en escritorio, tableta y móvil.
