import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='google-analytics-tag' 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-L9WH002XX4`}
      />
      <Script id='google-analytics-tag-body' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-L9WH002XX4');  
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
