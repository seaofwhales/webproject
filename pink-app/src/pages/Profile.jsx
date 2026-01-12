function Profile({ user }) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <div className="card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.name?.charAt(0) || '?'}
            </div>
            <div>
              <h1 style={{ color: 'var(--primary-pink)' }}>{user?.name}</h1>
              <p style={{ color: 'var(--text-light)' }}>{user?.email}</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--dark-pink)' }}>
                Информация о профиле
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Дата регистрации:</strong> {user?.createdAt}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Дата рождения:</strong> {user?.birthdate}
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--dark-pink)' }}>
                Интересы
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {user?.interests?.map(interest => (
                  <span
                    key={interest}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--light-pink)',
                      borderRadius: '20px',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;