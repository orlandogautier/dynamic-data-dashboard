# Dynamic Data Visualization Dashboard

!Screenshot

*Reemplaza el texto de arriba con una captura de pantalla (screenshot) atractiva de tu dashboard funcionando. Puedes subir la imagen a un servicio como Imgur o directamente a tu repositorio de GitHub y luego enlazarla aquí. Esto es lo primero que verá la gente.*

## Descripción del Proyecto

Este es un dashboard web de visualización de datos de pila completa (full-stack) diseñado para mostrar datos de ventas en tiempo real de una base de datos MySQL de una manera interactiva y fácil de entender. El objetivo principal es proporcionar una herramienta robusta para el monitoreo y análisis de las tendencias de ventas, facilitando la toma de decisiones informadas.

Este proyecto demuestra mi habilidad para construir aplicaciones web completas, desde la gestión de la base de datos hasta la interfaz de usuario interactiva, y la integración entre ambas capas.

## Características Principales

* **Visualización Dinámica de Datos:** Gráficos interactivos generados con Chart.js para mostrar tendencias de ventas por categoría, total de ventas, etc.
* **API RESTful con Flask:** Un backend robusto desarrollado en Python con Flask para servir datos desde la base de datos de manera eficiente.
* **Integración con MySQL:** Conexión y consulta de datos almacenados en una base de datos MySQL.
* **Tabla de Datos Detallada:** Una tabla HTML que muestra los datos de ventas en formato tabular, ofreciendo una vista detallada junto a los gráficos.
* **Diseño Responsivo:** La interfaz de usuario se adapta a diferentes tamaños de pantalla (aunque esta plantilla no incluye CSS, se asume que tu `style.css` lo maneja).
* **Manejo de Errores:** Implementación básica para la gestión de errores en la API.

## Tecnologías Utilizadas

* **Backend:**
    * Python 3.x
    * Flask (framework web)
    * MySQL Connector/Python (para la conexión a la base de datos)
* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (ES6+)
    * Chart.js (librería de gráficos)
* **Base de Datos:**
    * MySQL
* **Control de Versiones:**
    * Git
    * GitHub

## Cómo Instalar y Ejecutar el Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Abre tu terminal y clona este repositorio:

```bash
git clone [https://github.com/orlandogautier/dynamic-data-dashboard.git](https://github.com/orlandogautier/dynamic-data-dashboard.git)
cd dynamic-data-dashboard

¡Excelente! Un buen README.md es tu carta de presentación en GitHub. Te ayudará a destacar y a que cualquiera que visite tu repositorio entienda rápidamente de qué trata tu proyecto y cómo funciona.

Aquí tienes una plantilla detallada para tu README.md con contenido sugerido para tu proyecto "Dynamic Data Visualization Dashboard". Simplemente copia y pega esto en tu archivo README.md en GitHub (puedes editarlo directamente en la interfaz web de GitHub) y luego rellena los detalles específicos donde veas [TU_INFORMACIÓN_AQUÍ].

Markdown

# Dynamic Data Visualization Dashboard

![Screenshot del Dashboard - Opcional, pero muy recomendado]

*Reemplaza el texto de arriba con una captura de pantalla (screenshot) atractiva de tu dashboard funcionando. Puedes subir la imagen a un servicio como Imgur o directamente a tu repositorio de GitHub y luego enlazarla aquí. Esto es lo primero que verá la gente.*

## Descripción del Proyecto

Este es un dashboard web de visualización de datos de pila completa (full-stack) diseñado para mostrar datos de ventas en tiempo real de una base de datos MySQL de una manera interactiva y fácil de entender. El objetivo principal es proporcionar una herramienta robusta para el monitoreo y análisis de las tendencias de ventas, facilitando la toma de decisiones informadas.

Este proyecto demuestra mi habilidad para construir aplicaciones web completas, desde la gestión de la base de datos hasta la interfaz de usuario interactiva, y la integración entre ambas capas.

## Características Principales

* **Visualización Dinámica de Datos:** Gráficos interactivos generados con Chart.js para mostrar tendencias de ventas por categoría, total de ventas, etc.
* **API RESTful con Flask:** Un backend robusto desarrollado en Python con Flask para servir datos desde la base de datos de manera eficiente.
* **Integración con MySQL:** Conexión y consulta de datos almacenados en una base de datos MySQL.
* **Tabla de Datos Detallada:** Una tabla HTML que muestra los datos de ventas en formato tabular, ofreciendo una vista detallada junto a los gráficos.
* **Diseño Responsivo:** La interfaz de usuario se adapta a diferentes tamaños de pantalla (aunque esta plantilla no incluye CSS, se asume que tu `style.css` lo maneja).
* **Manejo de Errores:** Implementación básica para la gestión de errores en la API.

## Tecnologías Utilizadas

* **Backend:**
    * Python 3.x
    * Flask (framework web)
    * MySQL Connector/Python (para la conexión a la base de datos)
* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (ES6+)
    * Chart.js (librería de gráficos)
* **Base de Datos:**
    * MySQL
* **Control de Versiones:**
    * Git
    * GitHub

## Cómo Instalar y Ejecutar el Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Abre tu terminal y clona este repositorio:

```bash
git clone [https://github.com/orlandogautier/dynamic-data-dashboard.git](https://github.com/orlandogautier/dynamic-data-dashboard.git)
cd dynamic-data-dashboard
2. Configuración del Backend (Python/Flask)
Crear un Entorno Virtual (Recomendado):

Bash

python3 -m venv venv
source venv/bin/activate
Instalar Dependencias de Python:

Bash

pip install Flask mysql-connector-python
(Nota: Si usas pymysql o Flask-SQLAlchemy, ajusta esta línea accordingly).

Configuración de la Base de Datos MySQL:

Asegúrate de tener un servidor MySQL en ejecución.

Crea una base de datos para este proyecto (ej. sales_db).

SQL

CREATE DATABASE sales_db;
Crea una tabla sales dentro de esta base de datos con la siguiente estructura:

SQL

USE sales_db;
CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    sales_amount DECIMAL(10, 2) NOT NULL,
    sale_date DATE NOT NULL
);
Inserta algunos datos de ejemplo:

SQL

INSERT INTO sales (product_name, sales_amount, sale_date) VALUES
('Laptop', 1200.00, '2023-01-15'),
('Mouse', 25.50, '2023-01-16'),
('Keyboard', 75.00, '2023-01-16'),
('Monitor', 300.00, '2023-01-17'),
('Webcam', 40.00, '2023-01-18'),
('Laptop', 1150.00, '2023-02-01'),
('Mouse', 22.00, '2023-02-02'),
('Monitor', 310.00, '2023-02-03');
-- Agrega más datos de ejemplo si lo deseas
Actualiza la configuración de la base de datos en backend/data_logic.py con tus credenciales de MySQL:

Python

# Ejemplo en data_logic.py
DB_CONFIG = {
    'host': 'localhost',
    'user': '[TU_USUARIO_MYSQL]',
    'password': '[TU_CONTRASEÑA_MYSQL]',
    'database': 'sales_db'
}
Ejecutar el Servidor Flask:
Desde la raíz del proyecto (dynamic-data-dashboard), ejecuta el archivo app.py:

Bash

python backend/app.py
Verás un mensaje indicando que el servidor Flask está corriendo, probablemente en http://127.0.0.1:5000/.

3. Ejecutar el Frontend
Abrir el Archivo HTML:
Con el servidor Flask ejecutándose, simplemente abre el archivo frontend/index.html en tu navegador web preferido.

Puedes hacer esto arrastrando el archivo a la ventana del navegador o navegando a su ruta local (ej. file:///home/ogautier/data_dashboard/frontend/index.html).

El JavaScript en main.js se conectará automáticamente a tu servidor Flask para obtener los datos.

Estructura del Proyecto
.
├── backend/
│   ├── app.py              # Aplicación principal de Flask (API).
│   ├── data_logic.py       # Lógica para la conexión y consulta a la base de datos.
│   └── __pycache__/        # Caché de Python (ignorada por .gitignore).
├── frontend/
│   ├── css/
│   │   └── style.css       # Estilos CSS para el dashboard.
│   ├── js/
│   │   └── main.js         # Lógica JavaScript para la obtención de datos y renderizado de gráficos.
│   └── index.html          # Página principal del dashboard.
├── .gitignore              # Archivo para ignorar directorios y archivos de Git.
└── README.md               # Este archivo.
Posibles Mejoras Futuras
Implementar autenticación de usuarios.

Añadir filtros de fecha y categoría para los datos.

Permitir la adición y edición de datos de ventas a través de la interfaz.

Integrar con otras fuentes de datos (ej. APIs externas, CSV).

Mejorar la responsividad y el diseño UI/UX.

Contenedorización con Docker para un despliegue más sencillo.

Añadir pruebas unitarias y de integración.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

LinkedIn: https://www.linkedin.com/in/orlando-gautier-7011bb1a

Correo Electrónico: orlando.gauthier@gmail.com
