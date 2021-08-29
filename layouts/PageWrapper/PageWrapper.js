import Head from "next/head";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
    <Global
        styles={css`
            /* Box sizing rules */
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            /* Remove default padding */
            ul[class],
            ol[class] {
                padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
                margin: 0;
            }

            html {
                height: -webkit-fill-available;
            }

            /* Set core body defaults */
            body {
                min-height: 100vh;
                min-height: -webkit-fill-available;
                scroll-behavior: smooth;
                text-rendering: optimizeSpeed;
                line-height: 1.5;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
                text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img {
                max-width: 100%;
                display: block;
            }

            /* Natural flow and rhythm in articles by default */
            article > * + * {
                margin-top: 1em;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            /* Remove all animations and transitions for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            }

            :root {
                /* Font Sizes */
                --type--3: clamp(0.71rem, 0.7rem + 0.07vw, 0.76rem);
                --type--2: clamp(0.8rem, 0.77rem + 0.16vw, 0.91rem);
                --type--1: clamp(0.89rem, 0.84rem + 0.29vw, 1.09rem);
                --type-0: clamp(1rem, 0.91rem + 0.45vw, 1.31rem);
                --type-1: clamp(1.12rem, 0.99rem + 0.65vw, 1.58rem);
                --type-2: clamp(1.25rem, 1.07rem + 0.91vw, 1.89rem);
                --type-3: clamp(1.41rem, 1.16rem + 1.23vw, 2.27rem);
                --type-4: clamp(1.57rem, 1.25rem + 1.64vw, 2.72rem);
                --type-5: clamp(1.76rem, 1.33rem + 2.15vw, 3.27rem);
                --type-6: clamp(1.97rem, 1.42rem + 2.78vw, 3.92rem);
                --type-7: clamp(2.21rem, 1.5rem + 3.56vw, 4.7rem);

                /* Fonts */
                --font-display: neue-haas-grotesk-display, sans-serif;
                --font-text: neue-haas-grotesk-text, sans-serif;

                /* Spacing */
                /* @link https://utopia.fyi/space/calculator?c=320,24,1.12,1440,32,1.2,7,3,768-1024&s=0.75|0.5|0.25|0.125,1.25|1.5|1.75|2|2.5,s-l|xs-m */

                :root {
                    --fluid-min-width: 320;
                    --fluid-max-width: 1440;

                    --fluid-screen: 100vw;
                    --fluid-bp: calc(
                        (
                                var(--fluid-screen) - var(--fluid-min-width) /
                                    16 * 1rem
                            ) /
                            (var(--fluid-max-width) - var(--fluid-min-width))
                    );
                }

                @media screen and (min-width: 1440px) {
                    :root {
                        --fluid-screen: calc(var(--fluid-max-width) * 1px);
                    }
                }

                :root {
                    /* @link https://utopia.fyi/type/calculator?c=320,16,1.12,1440,21,1.2,7,3,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

                    --fc-4xs-min: (var(--fc-s-min) * 0.125);
                    --fc-4xs-max: (var(--fc-s-max) * 0.125);

                    --fc-3xs-min: (var(--fc-s-min) * 0.25);
                    --fc-3xs-max: (var(--fc-s-max) * 0.25);

                    --fc-2xs-min: (var(--fc-s-min) * 0.5);
                    --fc-2xs-max: (var(--fc-s-max) * 0.5);

                    --fc-xs-min: (var(--fc-s-min) * 0.75);
                    --fc-xs-max: (var(--fc-s-max) * 0.75);

                    --fc-s-min: (var(--f-0-min, 24));
                    --fc-s-max: (var(--f-0-max, 32));

                    --fc-m-min: (var(--fc-s-min) * 1.25);
                    --fc-m-max: (var(--fc-s-max) * 1.25);

                    --fc-l-min: (var(--fc-s-min) * 1.5);
                    --fc-l-max: (var(--fc-s-max) * 1.5);

                    --fc-xl-min: (var(--fc-s-min) * 1.75);
                    --fc-xl-max: (var(--fc-s-max) * 1.75);

                    --fc-2xl-min: (var(--fc-s-min) * 2);
                    --fc-2xl-max: (var(--fc-s-max) * 2);

                    --fc-3xl-min: (var(--fc-s-min) * 2.5);
                    --fc-3xl-max: (var(--fc-s-max) * 2.5);

                    /* T-shirt sizes */
                    --space-4xs: calc(
                        ((var(--fc-4xs-min) / 16) * 1rem) +
                            (var(--fc-4xs-max) - var(--fc-4xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-3xs: calc(
                        ((var(--fc-3xs-min) / 16) * 1rem) +
                            (var(--fc-3xs-max) - var(--fc-3xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-2xs: calc(
                        ((var(--fc-2xs-min) / 16) * 1rem) +
                            (var(--fc-2xs-max) - var(--fc-2xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-xs: calc(
                        ((var(--fc-xs-min) / 16) * 1rem) +
                            (var(--fc-xs-max) - var(--fc-xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-s: calc(
                        ((var(--fc-s-min) / 16) * 1rem) +
                            (var(--fc-s-max) - var(--fc-s-min)) *
                            var(--fluid-bp)
                    );
                    --space-m: calc(
                        ((var(--fc-m-min) / 16) * 1rem) +
                            (var(--fc-m-max) - var(--fc-m-min)) *
                            var(--fluid-bp)
                    );
                    --space-l: calc(
                        ((var(--fc-l-min) / 16) * 1rem) +
                            (var(--fc-l-max) - var(--fc-l-min)) *
                            var(--fluid-bp)
                    );
                    --space-xl: calc(
                        ((var(--fc-xl-min) / 16) * 1rem) +
                            (var(--fc-xl-max) - var(--fc-xl-min)) *
                            var(--fluid-bp)
                    );
                    --space-2xl: calc(
                        ((var(--fc-2xl-min) / 16) * 1rem) +
                            (var(--fc-2xl-max) - var(--fc-2xl-min)) *
                            var(--fluid-bp)
                    );
                    --space-3xl: calc(
                        ((var(--fc-3xl-min) / 16) * 1rem) +
                            (var(--fc-3xl-max) - var(--fc-3xl-min)) *
                            var(--fluid-bp)
                    );

                    /* One-up pairs */
                    --space-4xs-3xs: calc(
                        ((var(--fc-4xs-min) / 16) * 1rem) +
                            (var(--fc-3xs-max) - var(--fc-4xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-3xs-2xs: calc(
                        ((var(--fc-3xs-min) / 16) * 1rem) +
                            (var(--fc-2xs-max) - var(--fc-3xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-2xs-xs: calc(
                        ((var(--fc-2xs-min) / 16) * 1rem) +
                            (var(--fc-xs-max) - var(--fc-2xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-xs-s: calc(
                        ((var(--fc-xs-min) / 16) * 1rem) +
                            (var(--fc-s-max) - var(--fc-xs-min)) *
                            var(--fluid-bp)
                    );
                    --space-s-m: calc(
                        ((var(--fc-s-min) / 16) * 1rem) +
                            (var(--fc-m-max) - var(--fc-s-min)) *
                            var(--fluid-bp)
                    );
                    --space-m-l: calc(
                        ((var(--fc-m-min) / 16) * 1rem) +
                            (var(--fc-l-max) - var(--fc-m-min)) *
                            var(--fluid-bp)
                    );
                    --space-l-xl: calc(
                        ((var(--fc-l-min) / 16) * 1rem) +
                            (var(--fc-xl-max) - var(--fc-l-min)) *
                            var(--fluid-bp)
                    );
                    --space-xl-2xl: calc(
                        ((var(--fc-xl-min) / 16) * 1rem) +
                            (var(--fc-2xl-max) - var(--fc-xl-min)) *
                            var(--fluid-bp)
                    );
                    --space-2xl-3xl: calc(
                        ((var(--fc-2xl-min) / 16) * 1rem) +
                            (var(--fc-3xl-max) - var(--fc-2xl-min)) *
                            var(--fluid-bp)
                    );

                    /* Custom pairs */
                    --space-s-l: calc(
                        ((var(--fc-s-min) / 16) * 1rem) +
                            (var(--fc-l-max) - var(--fc-s-min)) *
                            var(--fluid-bp)
                    );
                    --space-xs-m: calc(
                        ((var(--fc-xs-min) / 16) * 1rem) +
                            (var(--fc-m-max) - var(--fc-xs-min)) *
                            var(--fluid-bp)
                    );
                }
            }
        `}
    />
);

export function PageWrapper(props) {
    const { children, title, description } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Head>
                <meta property="og:title" content={title} key="title" />
                <meta
                    name="description"
                    content={description}
                    key="description"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/bmt5egn.css"
                />
            </Head>
            <GlobalStyles />
            {children}
        </>
    );
}

PageWrapper.defaultProps = {
    title: "Alan Brown | Lead UI/UX Digital Product Designer and Developer",
    description:
        "Highly skilled Lead Designer with 17 years experience designing and delivering digital products",
};
