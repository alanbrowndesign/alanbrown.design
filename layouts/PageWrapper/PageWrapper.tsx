import Head from "next/head";
import { global } from "styles/globalStyles";
import { Navbar } from "components";

export function PageWrapper(props: any) {
    global();
    const { children, title, description, navBacking } = props;
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

            <Navbar navBacking={navBacking} />
            {children}
        </>
    );
}

PageWrapper.defaultProps = {
    title: "Alan Brown | Lead UI/UX Digital Product Designer and Developer",
    description:
        "Highly skilled Lead Designer with 17 years experience designing and delivering digital products",
};
