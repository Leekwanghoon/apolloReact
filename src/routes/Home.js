import React from 'react';
import styled from 'styled-components';
import { HOME_PAGE } from '../queries';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import Movie from '../components/Movie';

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(3,0.7fr);
    flex-wrap:wrap;
    justify-items:center;
`;

const Home = () => {
    const { data, error, loading} = useQuery(HOME_PAGE);
    console.log(data,loading,error);
    return(
        <Container>
            <Helmet>
                <title>Home | MovieQL</title>
            </Helmet>
            {loading && "Loading..."}
            {error && "Something is wrong"}
            {!loading && data.movies &&
                data.movies.map(movie => (
                    <Movie 
                        id={movie.id}
                        key={movie.id}
                        title={movie.title}
                        poster={movie.medium_cover_image}
                        rating={movie.rating}
                    />
                ))
            }
        </Container>
    );
}

export default Home;