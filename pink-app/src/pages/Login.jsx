import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
      const users = await response.json();
      
      if (users.length > 0) {
        onLogin(users[0]);
        navigate('/dashboard');
      } else {
        alert('Неверный email или пароль');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка при входе');
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h2 style={{ color: 'var(--primary-pink)', marginBottom: '2rem', textAlign: 'center' }}>
          Вход в PinkSpace
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Войти
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Нет аккаунта? <a href="/register" style={{ color: 'var(--primary-pink)' }}>Зарегистрироваться</a>
        </p>
      </div>
    </div>
  );
}

export default Login;