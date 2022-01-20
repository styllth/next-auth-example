import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <strong>NextAuth.js</strong> página de exemplo de autenticação.
        </p>
        <p>Copyright &copy; 2022 - Styllth</p>
      </div>
    </footer>
  );
};
