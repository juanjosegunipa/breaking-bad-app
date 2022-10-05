import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    const [filteredEpisodes, setFilteredEpisodes] = useState([]);

    const newSearch = event => {
        const matchArray = episodes.filter(e => {
            return e.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredEpisodes(matchArray)
    }

    useEffect(() => {
        axios.get('https://breakingbadapi.com/api/episodes')
            .then(res => {
                setEpisodes(res.data)
                setFilteredEpisodes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='episodes-page'>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ marginTop: 0, padding: '10px' }}>Search episode by title</h2>
                <input type='text' onChange={newSearch} />
            </div>
            {
                filteredEpisodes.map(e => {
                    return (
                        <div key={e.episode_id} className='episodes'>
                            <div>
                                <h2>Season {e.season} Episode {e.episode}: <Link to={`/episodes/${e.episode_id}`} className='episodes-links'>{e.title}</Link></h2>
                                <h4>Air date: {e.air_date}</h4>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Episodes;