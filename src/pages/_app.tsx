// ** React Imports
import { ReactNode } from 'react';

// ** Import Auth0
import { UserProvider } from '@auth0/nextjs-auth0/client';

// ** Next Imports
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import Script from 'next/script';

// ** Store Imports
import { Provider } from 'react-redux';
import { store } from 'src/store';

// ** Loader Import
import NProgress from 'nprogress';

// ** Emotion Imports
import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// ** Config Imports
import { defaultACLObj } from 'src/configs/acl';
import 'src/configs/i18n';
import themeConfig from 'src/configs/themeConfig';

// ** Third Party Import
import { Toaster } from 'react-hot-toast';

// ** Component Imports
import AclGuard from 'src/@core/components/auth/AclGuard';
import AuthGuard from 'src/@core/components/auth/AuthGuard';
import GuestGuard from 'src/@core/components/auth/GuestGuard';
import ThemeComponent from 'src/@core/theme/ThemeComponent';
import UserLayout from 'src/layouts/UserLayout';

// ** Spinner Import
import Spinner from 'src/@core/components/spinner';

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext';
import { AuthProvider } from 'src/context/AuthContext';

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast';

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache';

// ** Prismjs Styles
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css';

import 'src/iconify-bundle/icons-bundle-react';

// ** Global css styles
import '../../styles/globals.css';

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false;
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>);

  const setConfig = Component.setConfig ?? undefined;

  const authGuard = Component.authGuard ?? true;

  const guestGuard = Component.guestGuard ?? false;

  const aclAbilities = Component.acl ?? defaultACLObj;

  return (
    <UserProvider>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          {/* Hotjar Tracking Code for Login */}
          <Script
            id="hotjar"
            dangerouslySetInnerHTML={{
              __html: `
                      (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3877312,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                      `,
            }}
          ></Script>
          <Head>
            <title>{`${themeConfig.templateName} - Una experiencia única`}</title>
            <meta
              name="description"
              content={`${themeConfig.templateName} – Travel through your memories. Relive your past, reinvent your future by combining magic and artificial intelligence. Connect with your memories in a different way.`}
            />
            <meta
              name="keywords"
              content="Material Design, MUI, React, Next, Remember, legacy, memories, AI, artificial intelligence, magic, emotions, feelings, travel, past, future, connect, unique, experience, relive, reinvent, connect, memories, different, way, emotions, feelings, travel, past, future, connect, unique, experience, relive, reinvent, connect, memories, different, way"
            />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-P5G94YKB9B" strategy="afterInteractive" />
          <Script async id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P5G94YKB9B');
        `}
          </Script>
          <AuthProvider>
            <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      <Guard authGuard={authGuard} guestGuard={guestGuard}>
                        <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}>
                          {getLayout(<Component {...pageProps} />)}
                        </AclGuard>
                      </Guard>
                      <ReactHotToast>
                        <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                      </ReactHotToast>
                    </ThemeComponent>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthProvider>
        </CacheProvider>
      </Provider>
    </UserProvider>
  );
};

export default App;
