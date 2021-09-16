import { Global, css } from "@emotion/react";
import { colors, Typography } from "tokens";

export const GlobalCss = () => (
    <Global
        styles={css`
            :root {
                /* Font Sizes */
                /* @link https://utopia.fyi/type/calculator?c=320,16,1.12,1440,21,1.2,7,3,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

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

                /* Leading */
                --leading-none: 1;
                --leading-x-tight: 1.1;
                --leading-tight: 1.2;
                --leading-snug: 1.3;
                --leading-normal: 1.4;
                --leading-relaxed: 1.5;
                --leading-loose: 1.6;

                /* Weights */
                --display-light: 300;
                --display-medium: 500;
                --display-heavy: 600;

                --text-light: 400;
                --text-medium: 400;
                --text-heavy: 700;
            }

            /* Spacing */
            /* @link https://utopia.fyi/space/calculator?c=320,24,1.12,1440,32,1.2,7,3,768-1024&s=0.75|0.5|0.25|0.125,1.25|1.5|1.75|2|2.5,s-l|xs-m */

            :root {
                --fluid-min-width: 320;
                --fluid-max-width: 1440;

                --fluid-screen: 100vw;
                --fluid-bp: calc(
                    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
                        (var(--fluid-max-width) - var(--fluid-min-width))
                );
            }

            @media screen and (min-width: 1440px) {
                :root {
                    --fluid-screen: calc(var(--fluid-max-width) * 1px);
                }
            }

            :root {
                --fc-4xs-min: (var(--fc-s-min) * 0.125);
                --fc-4xs-max: (var(--fc-s-max) * 0.125);

                --fc-3xs-min: (var(--fc-s-min) * 0.25);
                --fc-3xs-max: (var(--fc-s-max) * 0.25);

                --fc-2xs-min: (var(--fc-s-min) * 0.5);
                --fc-2xs-max: (var(--fc-s-max) * 0.5);

                --fc-xs-min: (var(--fc-s-min) * 0.75);
                --fc-xs-max: (var(--fc-s-max) * 0.75);

                --fc-s-min: 24;
                --fc-s-max: 32;

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
                        (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp)
                );
                --space-s: calc(
                    ((var(--fc-s-min) / 16) * 1rem) +
                        (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp)
                );
                --space-m: calc(
                    ((var(--fc-m-min) / 16) * 1rem) +
                        (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp)
                );
                --space-l: calc(
                    ((var(--fc-l-min) / 16) * 1rem) +
                        (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp)
                );
                --space-xl: calc(
                    ((var(--fc-xl-min) / 16) * 1rem) +
                        (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
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
                        (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
                );
                --space-xs-s: calc(
                    ((var(--fc-xs-min) / 16) * 1rem) +
                        (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp)
                );
                --space-s-m: calc(
                    ((var(--fc-s-min) / 16) * 1rem) +
                        (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp)
                );
                --space-m-l: calc(
                    ((var(--fc-m-min) / 16) * 1rem) +
                        (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp)
                );
                --space-l-xl: calc(
                    ((var(--fc-l-min) / 16) * 1rem) +
                        (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp)
                );
                --space-xl-2xl: calc(
                    ((var(--fc-xl-min) / 16) * 1rem) +
                        (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
                );
                --space-2xl-3xl: calc(
                    ((var(--fc-2xl-min) / 16) * 1rem) +
                        (var(--fc-3xl-max) - var(--fc-2xl-min)) *
                        var(--fluid-bp)
                );

                /* Custom pairs */
                --space-s-l: calc(
                    ((var(--fc-s-min) / 16) * 1rem) +
                        (var(--fc-l-max) - var(--fc-s-min)) * var(--fluid-bp)
                );
                --space-xs-m: calc(
                    ((var(--fc-xs-min) / 16) * 1rem) +
                        (var(--fc-m-max) - var(--fc-xs-min)) * var(--fluid-bp)
                );
            } // end root

            html {
                height: -webkit-fill-available;
            }

            /* Set core body defaults */
            body {
                background: ${colors.primary.dark};
                min-height: 100vh;
                min-height: -webkit-fill-available;
                scroll-behavior: smooth;
                text-rendering: optimizeSpeed;
                line-height: var(--leading-normal);
                letter-spacing: 0.0125em;
                width: 100%;
                font-family: var(--font-text);
                font-weight: var(--text-medium);
                min-width: 20rem;
                font-size: var(--type-0);
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            /* Setting display fonts */
            .text-hero,
            .text-headline,
            .text-titlealpha,
            .text-titlebravo,
            .text-titlecharlie {
                font-family: var(--font-display);
                font-weight: var(--display-light);
            }

            /* Line heights */
            .text-headline,
            .text-titlealpha,
            .text-titlebravo,
            .text-titlecharlie,
            .text-heading {
                line-height: var(--leading-tight);
            }

            .text-hero {
                font-size: var(--type-7);
                line-height: var(--leading-x-tight);
            }
            .text-headline {
                font-size: var(--type-6);
            }
            .text-titlealpha {
                font-size: var(--type-5);
            }
            .text-titlebravo {
                font-size: var(--type-4);
            }
            .text-titlecharlie {
                font-size: var(--type-3);
                font-weight: var(--display-medium);
            }
            .text-heading {
                font-size: var(--type-2);
            }
            .text-subhead {
                font-size: var(--type-1);
                line-height: var(--leading-snug);
            }
            .text-body {
                font-size: var(--type-0);
            }
            .text-footnote {
                font-size: var(--type--1);
            }
            .text-caption {
                font-size: var(--type--2);
            }
            .text-micro {
                font-size: var(--type--3);
                line-height: var(--leading-relaxed);
            }
        `}
    />
);
