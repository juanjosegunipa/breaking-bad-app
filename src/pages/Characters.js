import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Characters = () => {

    const [characters, setcharacters] = useState([])

    const [filteredCharacters, setFilteredCharacters] = useState([])

    const newSearch = event => {
        const matchArray = characters.filter(e => {
            return e.name.toLowerCase().includes(event.target.value.toLowerCase()) || e.nickname.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredCharacters(matchArray)
    }

    useEffect(() => {
        axios.get('https://breakingbadapi.com/api/characters')
            .then(res => {
                setFilteredCharacters(res.data)
                setcharacters(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='characters-page'>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ marginTop: 0, padding: '10px' }}>Search a character</h2>
                <input type='text' onChange={newSearch} />
            </div>
            {
                filteredCharacters.map(e => {
                    return (
                        <div key={e.char_id} className='characters'>
                            <div>
                                <img src={e.img} alt={e.name} height={200} />
                                <Link to={`/characters/${e.char_id}`} className='characters-links'>
                                    <h2>{e.name}</h2>
                                </Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Characters;