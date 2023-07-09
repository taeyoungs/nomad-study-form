import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { Anek_Bangla } from 'next/font/google';

const anekBangla = Anek_Bangla({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={anekBangla.className}>
      <Component {...pageProps} />
    </main>
  );
}
