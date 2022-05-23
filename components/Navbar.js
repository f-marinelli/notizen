import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center" >
      <nav className="navbar d-flex navbar-expand-lg bg-dark" style={{ width: '100%' }}>
        <div className="container-fluid ">
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
          <div className="collapse navbar-collapse d-flex justify-content-evenly " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/chisiamo">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    CHI SIAMO
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/attualita">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    ATTUALITÀ
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/ubi">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    U.B.I
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pagoda">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    LA PAGODA
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/articoli">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    ARCHIVIO ARTICOLI
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/galleria">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    GALLERIA
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/libri">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    SPAZIO LIBRI
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/donazioni">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    DONAZIONI
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contatti">
                  <a className="nav-link text-light active px-3" style={{ fontSize: '0.8rem', fontWeight: 'bolder', letterSpacing: '0.1rem' }} aria-current="page">
                    CONTATTI
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
