import '../styles/globals.css';
import { Syne } from 'next/font/google';

// Load Syne with next/font
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={syne.variable}>
      <Component {...pageProps} />
    </div>
  );
}
