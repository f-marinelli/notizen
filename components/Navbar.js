import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Logo</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/chisiamo">
                <a className="nav-link active" aria-current="page">
                  Chi Siamo
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/attualita">
                <a className="nav-link active" aria-current="page">
                  Attualità
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ubi">
                <a className="nav-link active" aria-current="page">
                  UBI
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pagoda">
                <a className="nav-link active" aria-current="page">
                  La Pagoda
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/articoli">
                <a className="nav-link active" aria-current="page">
                  Archivio Articoli
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/galleria">
                <a className="nav-link active" aria-current="page">
                  Galleria
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/libri">
                <a className="nav-link active" aria-current="page">
                  Spazio Libri
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/donazioni">
                <a className="nav-link active" aria-current="page">
                  Donazioni
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contatti">
                <a className="nav-link active" aria-current="page">
                  Contatti
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
