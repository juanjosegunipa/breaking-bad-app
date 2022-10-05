import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Deaths = () => {

    const [deaths, setDeaths] = useState([]);

    const [filteredDeaths, setFilteredDeaths] = useState([]);

    const newSearch = event => {
        const matchArray = deaths.filter(e => {
            return e.death.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredDeaths(matchArray)
    }

    useEffect(() => {
        axios.get('https://breakingbadapi.com/api/deaths')
            .then(res => {
                setDeaths(res.data)
                setFilteredDeaths(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='deaths-page'>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ marginTop: 0, padding: '10px' }}>Spoiler alert! Search if someone died</h2>
                <input type='text' onChange={newSearch} />
            </div>
            {
                filteredDeaths.map(e => {
                    return (
                        <div key={e.death_id} className='deaths'>
                            <Link to={`/deaths/name/${e.death.replace(' ', '+')}`} className='deaths-links'><h2>{e.death}</h2></Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Deaths