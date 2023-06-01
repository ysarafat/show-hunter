import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function ShowDetails() {
    const id = useParams();
    const shows = useLoaderData();

    // find single show
    const singleShow = shows.find((s) => s.show.id == id.id);
    const { name, image, type, language, genres, status, schedule, summary, rating } =
        singleShow.show;

    const genresList = genres.join(', ');
    const scheduleList = schedule.days.join(', ');

    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center gap-5">
                <img
                    className="img-fluid rounded"
                    style={{ height: '700px', width: '50%' }}
                    src={image.original}
                    alt=""
                />
                <div>
                    <h3>Name : {name}</h3>
                    <p>Type: {type}</p>
                    <p>Language: {language}</p>
                    <p>Genres: {genresList}</p>
                    <p>Rating: {rating?.average ? rating?.average : 'N/A'} </p>
                    <p>Status: {status}</p>
                    <div>
                        <p className="fw-bold">schedule: </p>
                        <p>Time: {schedule.time || 'N/A'}</p>
                        <p>Day: {scheduleList || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Summary: </p>
                        <p dangerouslySetInnerHTML={{ __html: summary }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowDetails;
