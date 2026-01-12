function Home() {
    return (
      <div className="container">
        <div className="welcome-section">
          <h1>Добро пожаловать в PinkSpace! 🌸</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
            Ваше розовое пространство для творчества и общения
          </p>
          
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">💖</div>
              <h3>Сообщество</h3>
              <p>Присоединяйтесь к дружелюбному сообществу</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Творчество</h3>
              <p>Делитесь своими идеями и проектами</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Вдохновение</h3>
              <p>Находите вдохновение каждый день</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;