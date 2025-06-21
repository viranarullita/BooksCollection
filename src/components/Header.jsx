const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/buku.png" alt="logo" />
        <h2>Book Collection</h2>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Book</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;