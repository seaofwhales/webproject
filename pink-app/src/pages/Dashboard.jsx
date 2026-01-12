function Dashboard({ user }) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <h1 style={{ color: 'var(--primary-pink)', marginBottom: '2rem' }}>
          Добро пожаловать, {user?.name}! 🌸
        </h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Дней с нами</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>15</p>
          </div>
          
          <div className="stat-card">
            <h3>Друзей</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>8</p>
          </div>
          
          <div className="stat-card">
            <h3>Проектов</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</p>
          </div>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: 'var(--dark-pink)' }}>
            Сегодня для вас
          </h3>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--soft-pink)' }}>
              🎨 Примите участие в конкурсе рисунков
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--soft-pink)' }}>
              💝 Новое сообщение от подруги
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              🌸 Завершите свой профиль
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Dashboard;