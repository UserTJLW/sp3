import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext'; 
import styles from '../styles/Login.module.css';

function Login() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [cargando, setCargando] = useState(false); // Estado para manejar la carga
    const router = useRouter();
    const { login } = useAuth();

    const manejoNombreUsuarioCambio = (event) => setNombreUsuario(event.target.value);
    const manejoContraseniaCambio = (event) => setContrasenia(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCargando(true); // Activar el estado de carga

        const NombreUsuarioGuardado = localStorage.getItem('usuario')?.split(': ')[1];
        const ContraseniaGuardado = localStorage.getItem('contrasenia')?.split(': ')[1];

        // Verifica si los datos están almacenados
        if (!NombreUsuarioGuardado || !ContraseniaGuardado) {
            setMensajeError('Cuenta no encontrada, prueba creando tu cuenta.');
            setCargando(false); // Desactivar el estado de carga
            return;
        }

        if (nombreUsuario === NombreUsuarioGuardado && contrasenia === ContraseniaGuardado) {
            login(); // Aquí podría ir una función para manejar la sesión de usuario
            router.push('/inicio'); // Redirige a la página principal después de iniciar sesión
        } else {
            setMensajeError('Nombre de usuario o contraseña incorrectos.');
        }

        setCargando(false); // Desactivar el estado de carga al finalizar
    };

    return (
        <div className={styles.inicioSesion}>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                {mensajeError && <p className={styles.error}>{mensajeError}</p>}
                <div>
                    <label htmlFor="nombreUsuario">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="nombreUsuario"
                        name="nombreUsuario"
                        value={nombreUsuario}
                        placeholder="Nombre de usuario"
                        onChange={manejoNombreUsuarioCambio}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contrasenia">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasenia"
                        name="contrasenia"
                        value={contrasenia}
                        placeholder="Ingrese su contraseña"
                        onChange={manejoContraseniaCambio}
                        required
                    />
                </div>
                <div className={styles.Crear}>
                    <button type="submit" disabled={cargando}>
                        {cargando ? 'Iniciando...' : 'Iniciar sesión'}
                    </button>
                    <p>¿No tienes cuenta? <a href="/signup">Crea una cuenta</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
