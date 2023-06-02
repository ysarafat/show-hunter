import { Helmet } from 'react-helmet';
import Hero from './Hero/Hero';
import Shows from './Shows/Shows';

function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Show Hunter | Home</title>
            </Helmet>
            <Hero />
            <Shows />
        </div>
    );
}

export default Home;
