# Cambios necesarios para compatibilidad con cPanel (Directorio raíz)

Este documento describe los pasos y modificaciones recomendadas para desplegar correctamente este proyecto Laravel en un entorno de hosting cPanel, asumiendo que la aplicación se ubicará en el directorio raíz del dominio (por ejemplo, `/public_html`).

## 1. Configuración de rutas y archivos públicos

- **Ubicación de archivos**: Sube el contenido de la carpeta `public` del proyecto a la raíz de tu dominio en cPanel (`/public_html`)

## 2. Modificación del archivo `.htaccess`

- Asegúrate de que el archivo `.htaccess` de Laravel (ubicado originalmente en `public/.htaccess`) esté en la raíz del dominio.
- Verifica que las reglas de reescritura (RewriteRule) apunten correctamente al archivo `index.php`.
- Si la aplicación está en la raíz, normalmente no necesitas modificar las reglas, pero si ves rutas incorrectas, revisa los bloques `RewriteBase` y `RewriteRule`.

## 3. Configuración de `index.php`

- Edita las rutas en `index.php` (en la raíz del dominio) para que apunten correctamente al autoload y bootstrap del framework. Por ejemplo:

```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

- Si moviste los archivos fuera de `public_html`, ajusta las rutas relativas según corresponda.

## 4. Permisos de archivos y carpetas

- Asegúrate de que las carpetas `storage` y `bootstrap/cache` tengan permisos de escritura para el usuario del servidor web.

## 5. Configuración de variables de entorno

- Verifica que el archivo `.env` esté correctamente configurado para el entorno de producción y que no sea accesible desde la web.

## 6. Configuración de archivos estáticos

- La carpeta build que contiene el `manifest.json` se estrucutra de la siguiente forma: El `manifest.json` se encuentra en la carpeta `public/build/manifest.json`, mientras que los archivos generados por Vite (como `app.js` y `app.css`) se encuentran dentro de la carpeta `build` que se ubica en el directorio raíz del proyecto.

## 7. Configuración de archivos de sistema de archivos (`config/filesystems.php`)

- Si usas almacenamiento local, revisa que la ruta de `root` apunte correctamente según la estructura de carpetas en cPanel.
  
---

**Nota:** Estos pasos están pensados para instalaciones en la raíz del dominio. Si instalas en un subdirectorio, deberás ajustar las rutas en `.htaccess` y posiblemente en la configuración de la aplicación.