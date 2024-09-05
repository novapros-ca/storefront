import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-rangeslider/lib/index.css'

import '@/assets/css/animate.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/fontawesome.min.css';
import '@/assets/css/brands.min.css';
import '@/assets/css/solid.min.css';
import '@/assets/css/v5-font-face.min.css';

import '@/assets/css/nice-select.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/style.css';

import Dependency from '@/components/utilities/Dependency';
import {ToastContainer} from 'react-toastify';
import {Manrope, Outfit} from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const manrope = Manrope({subsets: ["latin"]});
const outfit = Outfit({subsets: ["latin"]});

export const metadata = {
    title: "NovaPros"
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','AW-16691148095');`}
        </Script>
        </head>
        <body className={`${outfit.className} ${manrope.className}`}>
        <ToastContainer/>
        <Dependency/>
        {children}
        </body>
        <GoogleAnalytics gaId='G-B23CM2CKYK'/>
        </html>
    );
}
