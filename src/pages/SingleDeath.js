import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const SingleDeath = () => {

    const { characterName } = useParams()

    const [singleDeath, setSingleDeath] = useState(null)

    useEffect(() => {
        axios.get(`https://breakingbadapi.com/api/death?name=${characterName}`)
            .then(res => setSingleDeath(res.data[0]))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='single-episode'>
            {singleDeath && (
                <>
                    <h1 style={{ marginTop: 0, padding: '10px' }}>{singleDeath.death}</h1>
                    <h2>Cause: {singleDeath.cause}</h2>
                    <h2>Last words: {singleDeath.last_words}</h2>
                    <h3>Season: {singleDeath.season} Episode: {singleDeath.episode}</h3>
                    <h4>Responsible: {singleDeath.responsible}</h4>
                </>
            )}
        </div>
    );
}

export default SingleDeath;