import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>Misión Jesuítica de Tavarangue</h1>
          </div>
          <ul className="nav-menu">
            <li><a href="#historia">Historia</a></li>
            <li><a href="#eurocraft">EuroCraft</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Misión Jesuítica de Tavarangue</h1>
          <p className="hero-subtitle">Un legado histórico recreado por los estudiantes de Eurosur</p>
          <div className="hero-buttons">
            <a href="#historia" className="btn btn-primary">Conocer la Historia</a>
            <a href="#eurocraft" className="btn btn-secondary">Ver Proyecto EuroCraft</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image"><img src='/imagen.jpeg' className='imagen1' alt='imagen1' /></div>

        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="section historia">
        <div className="container">
          <h2 className="section-title">Historia de la Misión</h2>
          <div className="historia-content">
            <div className="historia-text">
              <p>
                La Misión Jesuítica de Tavarangue, ubicada en Paraguay, fue una de las reducciones
                más importantes establecidas por los jesuitas en el siglo XVIII. Fundada en 1685,
                esta misión representó un modelo de organización social y cultural único en América.
              </p>
              <p>
                Los jesuitas crearon un sistema comunitario donde los guaraníes vivían en armonía
                con la naturaleza y desarrollaron habilidades artesanales, musicales y agrícolas
                que aún hoy nos asombran por su sofisticación.
              </p>
              <p>
                La arquitectura de Tavarangue se caracteriza por su mezcla de estilos europeos
                y elementos indígenas, creando un patrimonio arquitectónico único que forma parte
                del Patrimonio Mundial de la UNESCO.
              </p>
            </div>
            <div className="historia-image">
              <div className="placeholder-image"><img src='/imagen2.jpg' className='imagen2' alt='imagen2' /></div>
            </div>
          </div>
        </div>
      </section>

      {/* EuroCraft Section */}
      <section id="eurocraft" className="section eurocraft">
        <div className="container">
          <h2 className="section-title">Proyecto EuroCraft</h2>
          <div className="eurocraft-content">
            <div className="eurocraft-info">
              <h3>Recreando la Historia en Minecraft Education</h3>
              <p>
                Los estudiantes de la institución Eurosur han emprendido un proyecto ambicioso:
                recrear la Misión Jesuítica de Tavarangue en Minecraft Education Edition.
              </p>
              <p>
                Este proyecto educativo combina historia, arquitectura y tecnología, permitiendo
                a los estudiantes explorar y entender de manera interactiva la importancia
                cultural e histórica de estas misiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Estudiantes */}
      <section className="section estudiantes">
        <div className="container">
          <h2 className="section-title">Nuestros Estudiantes en Acción</h2>
          <div className="estudiantes-grid">
            <div className="estudiante-card">
              <div className="placeholder-image"><img src='/imagen3.jpg' className='imagen3' alt='imagen3' /></div>
              <h3>Adrián Aguilar</h3>
            </div>
            <div className="estudiante-card">
              <div className="placeholder-image"><img src='/imagen4.jpg' className='imagen4' alt='imagen4' /></div>
              <h3>Amir Silva</h3>
            </div>
            <div className="estudiante-card">
              <div className="placeholder-image"><img src='/imagen5.jpg' className='imagen5' alt='imagen5' /></div>
              <h3>Mauricio Ibarra</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Construcción */}
      <section id="galeria" className="section galeria">
        <div className="container">
          <h2 className="section-title">Galería del Proyecto</h2>
          <div className="galeria-grid">
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen6.jpg' className='imagen6' alt='imagen6' /></div>
              <p>Los chicos realizando el trabajo</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen7.jpg' className='imagen7' alt='imagen7' /></div>
              <p>El grupo reunido para finalizar el trabajo</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen8.jpg' className='imagen8' alt='imagen8' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen9.jpg' className='imagen9' alt='imagen9' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen10.jpg' className='imagen10' alt='imagen10' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen11.jpg' className='imagen11' alt='imagen11' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen12.jpg' className='imagen12' alt='imagen12' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen13.jpg' className='imagen13' alt='imagen13' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
            <div className="galeria-item">
              <div className="placeholder-image"><img src='/imagen14.jpg' className='imagen14' alt='imagen14' /></div>
              <p>Visitando la Misión Jesuítica de Tavarangue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Proyecto EuroCraft</h3>
              <p>Instituto Eurosur</p>
              <p>Recreando la historia en Minecraft Education</p>
            </div>
            <div className="footer-section">
              <h3>Misión Jesuítica</h3>
              <p>Tavarangue, Paraguay</p>
              <p>Patrimonio Mundial UNESCO</p>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>jorgemf196@gmail.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EuroCraft - Eurosur. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
