import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Logs({ token, onLogout }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const cargarLogs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/logs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLogs(res.data);
      } catch (error) {
        console.error('Error al cargar logs:', error);
      }
    };

    cargarLogs();
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="bg-white p-4 rounded shadow border border-danger">
        <h3 className="text-danger text-center">Logs de Auditoría</h3>
        <div className="text-end">
          <button className="btn btn-outline-danger" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-danger text-center">
            <tr>
              <th>Correo</th>
              <th>IP</th>
              <th>Fecha</th>
              <th>Éxito</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.email}</td>
                <td>{log.ip}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
                <td className="text-center">{log.success ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
