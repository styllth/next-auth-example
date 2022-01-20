import { Header } from './header';
import { Footer } from './footer';
import { NextPage } from 'next';

export const Layout: NextPage = ({ children }) => (
  <>
    <Header />
    <main
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem'
      }}
    >
      {children}
    </main>
    <Footer />
  </>
);
