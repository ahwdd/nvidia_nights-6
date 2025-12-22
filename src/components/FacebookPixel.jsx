// components/FacebookPixel.tsx
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function FacebookPixel() {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (mounted && typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "PageView");
    }
  }, [mounted]);

  return (
    <div>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2193762604480703');
            // We removed the automatic 'PageView' call from here 
            // to handle it in the useEffect above.
          `,
        }}
      />
    </div>
  );
}