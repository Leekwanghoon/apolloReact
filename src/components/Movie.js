import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Card = styled.div`
    border-radius:15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-position: center center;
    height: 300px;
    width: 200px;
    margin-bottom: 40px;
    position: relative;
`;

const Title = styled.span`
    background-color: white;
    width:auto;
    padding:10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    margin: auto;
`;

const Movie = ({ id, title, rating, poster}) => (
    
    <Link to={`/details/${id}`}>
        <Card bg={poster}>
            <Title>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />       {title} / {rating}⭐️
            </Title>
        </Card>
    </Link>
)

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
}
export default Movie;