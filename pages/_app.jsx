import '../styles/globals.scss';
import Layout from "@/components/layout";

function MyApp({Component, pageProps}) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp