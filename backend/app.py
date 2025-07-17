#backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from data_logic import get_db_connection, get_all_sales_data #Importa las funciones de logica de datos

app = Flask(__name__)
CORS(app) #HAbilita CORS para permitir peticiones desde el frontend

@app.route('/api/sales', methods=['GET'])
def get_sales_data():
    """Endpoint para obtener todos los datos de ventas"""
    connection = None
    try:
        connection = get_db_connection()
        data = get_all_sales_data(connection)
        return jsonify(data)
    except Exception as e:
        print(f"Error al obtener datos de ventas: {e}")
        return jsonify ({"error": "Noo se pudiero recuperar los datos de ventas"}), 500
    finally:
        if connection:
            connection.close()

@app.route('/')
def index():
    return "Backend del Dashboard de Ventas Funcionando!"

if __name__ == '__main__':
    #El backend correra en http://localhos:5000
    app.run(debug=True, port=5000)
