function ThemeToggle({ toggleTheme }) {
    return (
      <button 
        onClick={toggleTheme}
        className="theme-toggle"
        style={{
          background: 'var(--light-pink)',
          border: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem'
        }}
      >
        🌙
      </button>
    );
  }
  
  export default ThemeToggle;