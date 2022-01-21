import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './header.module.css';

export const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <header>
      <div className={styles.headerWrapper}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                Você não está logado.
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={e => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Login
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={styles.avatar}
              />
              <span className={styles.signedInText}>
                <small>Bem vindo, </small>
                <br />
                <strong>{session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={e => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sair
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  );
};
