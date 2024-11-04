import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta
import './Login.css'

function Signup() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [acepto, setAcepto] = useState(false);
    const [cuentaCreada, setCuentaCreada] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const manejoNombreUsuario = (event) => setNombreUsuario(event.target.value);
    const manejoContrasenia = (event) => setContrasenia(event.target.value);
    const manejoAcepto = (event) => setAcepto(event.target.checked);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nombreUsuario || !contrasenia || !acepto) {
            alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
            return;
        }
        localStorage.setItem("usuario", `Nombre de usuario: ${nombreUsuario}`);
        localStorage.setItem("contrasenia", `Constrasenia: ${contrasenia}`);
        localStorage.setItem("aceptoT", acepto ? 'Acepta Términos y Condiciones' : 'No acepta Términos y Condiciones');
        setCuentaCreada(true);
    };

    const manejoVolverHome = () => navigate('/login');

    return (
        <div className="crearC">
            {cuentaCreada ? (
                <div className="mensaje-exito">
                    <h1>Cuenta creada exitosamente!!</h1>
                    <button onClick={manejoVolverHome}>Volver a la página de inicio</button>
                </div>
            ) : (
                <div className="CrearC">
                    <h1>Crea tu cuenta en TimeBank</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombreUsuario"></label>
                            <input
                                type="text"
                                id="nombreUsuario"
                                name="nombreUsuario"
                                placeholder="Cree un nombre de usuario:"
                                value={nombreUsuario}
                                onChange={manejoNombreUsuario}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contrasenia"></label>
                            <input
                                type="password"
                                id="contrasenia"
                                name="contrasenia"
                                placeholder="Cree una contraseña:"
                                value={contrasenia}
                                onChange={manejoContrasenia}
                                required
                            />
                        </div>
                        <div>
                            <label className="acepto">
                                <input
                                    type="checkbox"
                                    id="acepto"
                                    name="acepto"
                                    checked={acepto}
                                    onChange={manejoAcepto}
                                    required
                                /> Acepto los términos y condiciones
                            </label>

                        </div>
                        <button type="submit">Crear cuenta</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Signup;
