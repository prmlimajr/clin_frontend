import Api from '../../app/services/api';
import { login, logout } from '../../app/services/auth';

export async function userSignUp({ name, email, password, confirmPassword }) {
  try {
    await Api.post('/users', { name, email, password, confirmPassword });
    alert(
      'Cadastro realizado com sucesso. Faça o login para acessar o sistema.'
    );
  } catch (err) {
    alert('Falha no cadastro. Verifique seus dados.');
  }
}

export async function userSignIn({ email, password }) {
  try {
    const res = await Api.post('/session', { email, password });

    const { token } = res.data;
    login(token);
  } catch (err) {
    alert('Falha na autenticação. Verifique seus dados.');
  }
}

export function userSignOut() {
  logout();
}
