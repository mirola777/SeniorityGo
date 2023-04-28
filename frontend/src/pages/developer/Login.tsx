import axios from "axios";
import { useState } from "react";

interface User {
    username: string;
    password: string;
}

function DeveloperLogin() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const user: User = {
            username,
            password
        };
        console.log(user);
        try {
            // Obtener el token CSRF de la cookie de sesión csrftoken
            const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)[1];

            const { data } = await axios.post('http://localhost:8000/api/token', user, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken // Agregar el encabezado X-CSRFToken con el token CSRF
                },
                withCredentials: true
            });
            console.log(data);

            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
            window.location.href = '/';
        } catch (error) {
            console.log(error + 'errorKAKSADKDSAKDSKSDKDKSADKSK');
            console.error(error);
        }
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter Username"
                            name='username'
                            type='text'
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name='password'
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DeveloperLogin;
