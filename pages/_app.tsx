import { PageWrapper } from "layouts";
import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollY } = useViewportScroll();
    useEffect(
        () =>
            scrollY.onChange(() => {
                scrollY.get() >= 100
                    ? updateShowNavBacking(true)
                    : updateShowNavBacking(false);
                console.log(scrollY);
            }),
        []
    );
    const [showNavBacking, updateShowNavBacking] = useState(false);
    return (
        <PageWrapper navBacking={showNavBacking}>
            <Component {...pageProps} />
        </PageWrapper>
    );
}

export default MyApp;