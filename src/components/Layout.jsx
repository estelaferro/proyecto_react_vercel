import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

function Layout({ children }) {
  
  // SEO NATIVO con useEffect
  useEffect(() => {
    document.title = "Moksha Joyas | Tienda de increíbles joyas artesanales";
   
    // Función que actualiza meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag('description', 'Explora nuestro catálogo completo de juegos de mesa únicos. Encuentra juegos históricos, clásicos, modernos y educativos. Compra en línea con los mejores precios.');
    updateMetaTag('keywords', 'juegos de mesa, juegos históricos, juegos clásicos, juegos modernos, juegos educativos, tienda de juegos, comprar juegos de mesa');
    updateMetaTag('author', 'Tienda de Juegos de Mesa');
    updateMetaTag('robots', 'index, follow');

    // Open Graph para redes sociales
    updateMetaTag('og:title', 'Tienda de Juegos de Mesa | Los Mejores Juegos', 'property');
    updateMetaTag('og:description', 'Descubre una amplia variedad de juegos de mesa. Desde clásicos históricos hasta juegos modernos y educativos.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:image', window.location.origin + '/logo.jpg', 'property');
    updateMetaTag('og:url', window.location.origin, 'property');
    updateMetaTag('og:site_name', 'Tienda de Juegos de Mesa', 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Tienda de Juegos de Mesa');
    updateMetaTag('twitter:description', 'Compra los mejores juegos de mesa en línea');
    updateMetaTag('twitter:image', window.location.origin + '/logo.jpg');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

  }, []);

  return (
    <LayoutContainer>
      <Header>
        <Navbar />
      </Header>
      
      <Main>
        {children}
      </Main>
      
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutContainer>
  );
}

export default Layout;

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
`;