import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMAC",
  description: "IMAC",
  icons: {
    icon: 'https://www.clinicaimac.com/static/images/imac-apple-icon-57x57.png',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`} 
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            
            <header className="">
              <div className="text-white p-2 text-center d-flex justify-content-center"  style={{ background: '#35bfb4'}}>
                <div>
                  <i className="fa fa-phone me-2" />
                  <a className="text-white" href="tel:211320917">211 320 917*</a>
                </div>
                <div className="ms-3">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a className="text-white" href="mailto:info@clinicaimac.com">info@clinicaimac.com</a>
                </div>
                <div className="ms-3"> | </div>
                <div className="ms-3">
                  
                  <a className="text-white" href="https://www.facebook.com/ClincaIMAC/">
                    <i className="fa-brands fa-facebook-f text-white"></i>
                  </a>
                </div>
                <div className="ms-3">
                  <a className="text-white" href="https://www.instagram.com/imac_clinica/">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </a>
                </div>
              </div>          
            </header>

            <div className="container">

              <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#fff' }}>
                <img src="/logo-wide.png" alt=""></img>

                <nav className="navbar navbar-expand-lg">

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/imac">IMAC</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/especialidades">Especialidades</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contactos">Contactos</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/consulta">Marcar Consulta</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

            </div>

            <div className="flex-grow-1">
              {children}
            </div>

            <footer  style={{ background: '#e2e2e2'}}>
              <div className="container p-3 text-center">
                <div className="d-flex w-100 pb-3">
                  <div className="w-75">
                    <div className="position-relative">
                      <div className="mb-3" style={{ borderBottom: '1px dashed #86bab6', height: '10px' }}></div>
                      <svg width="200" height="100" className="position-absolute" style={{ top: '0', left: '0' }}>
                        <circle cx="10" cy="10" r="5" stroke-width="0" fill="#35bfb4" />
                      </svg>
                      <svg width="200" height="100" className="position-absolute" style={{ top: '0', left: '0' }}>
                        <circle cx="10" cy="10" r="5" stroke-width="0" fill="#35bfb4" />
                      </svg>
                      <svg width="200" height="100" className="position-absolute" style={{ top: '0', left: '0' }}>
                        <circle cx="10" cy="10" r="5" stroke-width="0" fill="#35bfb4" />
                      </svg>
                    </div>
                    <div className="d-flex" style={{ color: '#1e686b'}}>
                      <div style={{ width: '30%'}}>
                        <i className="fa-solid fa-envelope me-2" style={{ fontSize: '3rem' }}></i>
                      </div>
                      <div style={{ width: '30%'}}>
                        <i className="fa-solid fa-mobile-screen" style={{ fontSize: '3rem' }}></i>
                      </div>
                      <div style={{ width: '30%' }}>
                        <i className="fa-solid fa-map-location-dot" style={{ fontSize: '3rem' }}></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-25 text-center">
                    <div className="fw-bold">Siga-nos nas redes sociais</div>

                    <div className="text-white d-flex justify-content-center align-items-center mt-2">
                      <a target="_blank" href="https://www.facebook.com/ClincaIMAC/" >
                        <div className="d-flex justify-content-center align-items-center" style={{ background: '#1e686b', borderRadius: '50%', height: '40px', width: '40px' }}>
                          <i className="fa-brands fa-facebook-f"></i>
                        </div>                        
                      </a>                      
                      <a target="_blank" href="https://www.instagram.com/imac_clinica/">
                        <div className="d-flex justify-content-center align-items-center ms-2" style={{ background: '#1e686b', borderRadius: '50%', height: '40px', width: '40px' }}>
                          <i className="fa-brands fa-instagram"></i>
                        </div>                                                  
                      </a>                    
                    </div>
                    <div className="mt-3" style={{ color: '#1e686b'}}>
                      <i className="fa-solid fa-volume-high" />
                      <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank"><i className="pe-7s-speaker font-20"></i> Livro de Reclamações</a>
                    </div>
                  </div>
                </div>


                <div className="text-secondary">
                  IMEI, Lda | Entidade Reguladora da Saúde Nº 21231 | Nº Licença de Funcionamento: 23568/2023 | Nº Certidão de Registo: E168340

                </div>
              </div>
              <div className="text-center p-2 text-white" style={{ background: '#35bfb4' }}>
                <small className="mx-auto">
                  *Custo de Chamada para a Rede Fixa de acordo com o seu tarifário | Copyright ©2023 IMAC. All Rights Reserved - Developed by YOMOC
                </small>
              </div>
            </footer>

          </body>
        </html>
}
