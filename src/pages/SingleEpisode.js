import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const SingleEpisode = () => {

    const [singleEpisode, setSingleEpisode] = useState(null)

    const { episodeId } = useParams()

    useEffect(() => {
        axios.get(`https://breakingbadapi.com/api/episodes/${episodeId}`)
            .then(res => setSingleEpisode(res.data[0]))
            .catch(err => console.log(err))
    }, [episodeId])

    return (
        <div className='single-episode'>
            {singleEpisode && (
                <div key={singleEpisode.episode_id}>
                    <h1 style={{ marginTop: 0, padding: '10px' }}>{singleEpisode.title}</h1>
                    <h2>Season: {singleEpisode.season} Episode: {singleEpisode.episode}</h2>
                    <h3>Air date: {singleEpisode.air_date}</h3>
                    <h3>Characters on this episode:</h3>
                    {
                        singleEpisode.characters.map(e => {
                            return (
                                <div key={e}>
                                    <Link to={`/characters/name/${e.replace(' ', '+')}`} className='episodes-links'><h3>{e}</h3></Link>
                                </div>
                            );
                        })
                    }
                </div>
            )}
        </div>
    );
}

export default SingleEpisode