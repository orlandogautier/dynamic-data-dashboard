# backenddata_logic.py
import pymysql.cursors
import os

# --- Configuración de MySQL (preferiblemente desde las variables de entorno) ---
DB_CONFIG = {
    'host': os.getenv('DB_HOST', 'localhost'),
    'user': os.getenv('DB_USER', 'webuser'),
    'password': os.getenv('DB_PASSWORD', '10824476'),
    'db': os.getenv('DB_NAME', 'dashboard_db'),
    'charset': 'utf8mb4',
    'cursorclass': pymysql.cursors.DictCursor # Para obtener resultados como diccionarios
}

def get_db_connection():
    """Establece y retorna una conexion a la base de datos"""
    return pymysql.connect(**DB_CONFIG)

def get_all_sales_data(connection):
    """Obteiene todos los datos de ventas de la table productos"""
    with connection.cursor() as cursor:
        sql = "SELECT id, product_name, sales_amount, sales_date FROM products ORDER BY sales_date DESC LIMIT 100"
        cursor.execute(sql)
        results = cursor.fetchall()
        return results
