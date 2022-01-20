import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>NextAuth.js - Página de exemplo de autenticação</title>
    </Head>
    <h1>NextAuth.js</h1>
    <p>
      Este é um site de exemplo para demonstrar como usar NextAuth.js para
      autenticação.
    </p>
  </Layout>
);

export default Home;
