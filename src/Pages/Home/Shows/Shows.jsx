import { useEffect, useState } from 'react';
import ShowsCard from './ShowsCard';

function Shows() {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((data) => setShows(data));
    }, []);

    return (
        <section className="mt-5 container ">
            <div className="text-center">
                <h2 className="fs-2 fw-bold text-center">Favorite Shows</h2>
                <p className="text-secondary">TV shows can vary greatly among individuals.</p>
            </div>
            <div className="">
                <div className="row">
                    {shows.map((show) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                            <ShowsCard key={show.show.id} show={show.show} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Shows;
