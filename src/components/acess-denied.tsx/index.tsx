import { NextPage } from 'next';
import { signIn } from 'next-auth/react';

export const AccessDenied: NextPage = () => (
  <>
    <h1>Acesso Negado!!!</h1>
    <p>
      <a
        href="/api/auth/signin"
        onClick={e => {
          e.preventDefault();
          signIn();
        }}
      >
        <span>Você deve estar conectado para visualizar esta página</span>
      </a>
    </p>
  </>
);
