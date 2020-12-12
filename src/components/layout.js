import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Navbar, Footer, Social, ScrollToTop } from '@components';
import { GlobalStyles, theme } from '@styles';

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const home = location.pathname === '/';
  const [isLoading] = useState(home);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <LayoutContainer>
            <Navbar home={home} />
            <Social home={home} />
            <ScrollToTop home={home} />
            <div id="content">
              {children}
              <Footer />
            </div>
          </LayoutContainer>
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
  location: propTypes.object.isRequired,
};

export default Layout;
