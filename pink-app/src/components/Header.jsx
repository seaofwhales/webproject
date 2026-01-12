import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header({ user, onLogout, toggleTheme }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <span>🌸</span> PinkSpace
          </Link>
          
          <div className="nav-links">
            <Link to="/">Главная</Link>
            
            {user ? (
              <>
                <Link to="/dashboard">Личный кабинет</Link>
                <Link to="/profile">Профиль</Link>
                <button onClick={handleLogout} className="btn">
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Войти</Link>
                <Link to="/register">
                  <button className="btn">Регистрация</button>
                </Link>
              </>
            )}
            
            <ThemeToggle toggleTheme={toggleTheme} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;