import { StoreProvider } from '@/utilities/Store';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </StoreProvider>
  );
}

export default MyApp;
