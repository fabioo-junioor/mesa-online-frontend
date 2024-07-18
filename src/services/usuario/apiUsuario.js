const urlApi = import.meta.env.VITE_ROOT_API;
import { getDadosUsuario } from '../localStorage/settingSession.js';

const loginUsuario = async (dados) => {
    try{
        const response = await fetch(urlApi+'usuario/login', {
            headers: { "Content-Type" : "application/json" },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                email: dados.email,
                senha: dados.senha
            })
        });
        const data = await response.json();
        return data;

    }catch(err) {
        console.log(err);

    }
}
const cadastroUsuario = async (dados) => {
    try {
        const response = await fetch(urlApi+'usuario/create', {
            headers: { "Content-Type" : "application/json" },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                email: dados.email,
                senha: dados.senha,
                tipoUsuario: dados.tipoUsuario
            })
        });
        const data = await response.json();
        return data;

    }catch(err) {
        console.log(err);

    }
}
const editarUsuario = async (dados) => {
    try {
        const { pkUsuario, token } = getDadosUsuario();
        const response = await fetch(urlApi+`usuario/edit/${pkUsuario}`, {
            headers: { "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`},
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                senha: dados.senhaAtual,
                novaSenha: dados.senhaNova
            })
        });
        const data = await response.json();
        return data;

    }catch(err) {
        console.log(err);

    }
}
export { 
    loginUsuario,
    cadastroUsuario,
    editarUsuario 
}