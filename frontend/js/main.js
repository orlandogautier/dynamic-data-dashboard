// frontend/js/main.js

// Declara una variable global para guardar la instancia de la gráfica
let salesChartInstance = null; // Inicializa a null para un control limpio

document.addEventListener('DOMContentLoaded', () => {
    // URL de tu API de Flask. Asegúrate de que coincida con donde corre tu backend.
    const apiUrl = 'http://localhost:5000/api/sales'; // Ajusta si tu endpoint es diferente (ej. /api/data)

    // Realiza la petición a la API de tu backend
    fetch(apiUrl)
        .then(response => {
            // Verifica si la respuesta de la red fue exitosa (código 200-299)
            if (!response.ok) {
                // Si la respuesta no es OK, lanza un error para ser capturado por .catch()
                // ¡CORRECCIÓN AQUÍ: Usamos backticks (`) para la template literal!
                throw new Error(`Error HTTP! Estado: ${response.status}`);
            }
            // Si la respuesta es OK, parsea el cuerpo de la respuesta como JSON
            return response.json();
        })
        .then(data => {
            // Cuando los datos son recibidos y parseados, los mostramos en consola para depuración
            console.log('Datos obtenidos:', data);
            // Llama a las funciones para renderizar la tabla y el gráfico
            renderTable(data);
            renderChart(data); // Llama a la función de renderizado de la gráfica
        })
        .catch(error => {
            // Captura y maneja cualquier error que ocurra durante la petición o el procesamiento
            console.error('Error al obtener datos:', error);
            // Muestra una alerta al usuario para informarle del problema
            alert('Fallo al cargar los datos. Por favor, asegúrate de que el servidor backend esté corriendo y sea accesible.');
        });

    /**
     * Función para renderizar los datos en una tabla HTML.
     * @param {Array<Object>} data - Un array de objetos con los datos a mostrar.
     */
    function renderTable(data) {
        const tableBody = document.querySelector('#dataTable tbody');
        tableBody.innerHTML = ''; // Limpia el contenido actual de la tabla para evitar duplicados

        // Itera sobre cada fila de datos y crea una nueva fila en la tabla
        data.forEach(row => {
            const tr = document.createElement('tr');
            // Aseguramos que sales_amount se formatee a 2 decimales para montos
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.product_name}</td>
                <td>${parseFloat(row.sales_amount).toFixed(2)}</td>
                <td>${row.sales_date}</td>
            `;
            tableBody.appendChild(tr); // Añade la fila a la tabla
        });
    }

    /**
     * Función para renderizar un gráfico de barras utilizando Chart.js.
     * @param {Array<Object>} data - Un array de objetos con los datos para el gráfico.
     */
    function renderChart(data) {
        // Objeto para acumular las ventas totales por producto
        const productSales = {};
        data.forEach(item => {
            const product = item.product_name;
            // Suma el monto de ventas al producto correspondiente, convirtiéndolo a número
            productSales[product] = (productSales[product] || 0) + parseFloat(item.sales_amount);
        });

        // Extrae las etiquetas (nombres de productos) y los valores (montos de ventas) para el gráfico
        const labels = Object.keys(productSales);
        const amounts = Object.values(productSales);

        // Obtiene el contexto 2D del elemento canvas para Chart.js
        const ctx = document.getElementById('salesChart').getContext('2d');

        // --- CLAVE: Destruir la instancia anterior si existe ---
        // Esto es crucial para evitar errores y fugas de memoria al volver a renderizar el gráfico
        if (salesChartInstance) {
            salesChartInstance.destroy(); // Destruye la gráfica anterior
        }

        // --- CLAVE: Asignar la nueva instancia a la variable global ---
        // Crea y guarda la nueva instancia del gráfico de barras
        salesChartInstance = new Chart(ctx, {
            type: 'bar', // Puedes cambiar a 'line', 'pie', 'doughnut', etc.
            data: {
                labels: labels, // Etiquetas para el eje X (nombres de productos)
                datasets: [{
                    label: 'Monto de Ventas', // Etiqueta para la serie de datos
                    data: amounts, // Valores para el eje Y (montos de ventas)
                    backgroundColor: 'rgba(75, 192, 192, 0.7)', // Color de las barras (semi-transparente)
                    borderColor: 'rgba(75, 192, 192, 1)',       // Borde de las barras
                    borderWidth: 1 // Ancho del borde
                }]
            },
            options: {
                responsive: true, // El gráfico se adapta al tamaño de su contenedor
                maintainAspectRatio: false, // Permite que el gráfico ajuste su tamaño libremente
                scales: {
                    y: {
                        beginAtZero: true, // El eje Y comienza en cero
                        title: {
                            display: true,
                            text: 'Monto de Ventas ($)' // Título para el eje Y
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Producto' // Título para el eje X
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Ventas Totales por Producto' // Título principal del gráfico
                    },
                    legend: {
                        display: false // Oculta la leyenda si solo hay una serie de datos
                    }
                }
            }
        });
    }
});
