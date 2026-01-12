import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthdate: '',
    interests: []
  });
  
  const navigate = useNavigate();
  const interestsList = ['Искусство', 'Музыка', 'Кино', 'Спорт', 'Кулинария', 'Путешествия', 'Чтение', 'Йога'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString().split('T')[0]
        })
      });
      
      if (response.ok) {
        alert('Регистрация успешна!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка при регистрации');
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h2 style={{ color: 'var(--primary-pink)', marginBottom: '2rem', textAlign: 'center' }}>
          Регистрация в PinkSpace
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              minLength="6"
            />
          </div>
          
          <div className="form-group">
            <label>Дата рождения:</label>
            <input
              type="date"
              value={formData.birthdate}
              onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Интересы:</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {interestsList.map(interest => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: `2px solid ${formData.interests.includes(interest) ? 'var(--primary-pink)' : 'var(--light-pink)'}`,
                    background: formData.interests.includes(interest) ? 'var(--primary-pink)' : 'transparent',
                    color: formData.interests.includes(interest) ? 'white' : 'var(--text-dark)',
                    cursor: 'pointer'
                  }}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Зарегистрироваться
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Уже есть аккаунт? <a href="/login" style={{ color: 'var(--primary-pink)' }}>Войти</a>
        </p>
      </div>
    </div>
  );
}

export default Register;