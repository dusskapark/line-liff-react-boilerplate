import React from 'react';
import qs from 'qs'

const About = ({location, match}) => {
    const query = qs.parse(location.search)

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;
