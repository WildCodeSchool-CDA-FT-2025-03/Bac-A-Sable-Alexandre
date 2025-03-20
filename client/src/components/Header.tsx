function Header() {
  return (
    <>
      <header>
      <div className="TitreSite">
        Gestion de Repos
      </div>
      <nav>
        <a href="/" className="nav-item">Home</a>
        <a href="/repos/create" className="nav-item">Ajout</a>
        <span className="nav-indicator"></span>
      </nav>
      </header>
    </>
  );
}

export default Header;
