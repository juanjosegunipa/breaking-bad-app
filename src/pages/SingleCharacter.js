import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleCharacter = () => {

    const [singleCharacter, setSingleCharacter] = useState(null)

    const { characterId, characterName } = useParams();

    useEffect(() => {
        axios.get(characterId ? `https://breakingbadapi.com/api/characters/${characterId}` : `https://breakingbadapi.com/api/characters?name=${characterName}`)
            .then(res => setSingleCharacter(res.data[0]))
            .catch(err => console.log(err))
    }, [characterId])

    return (
        <div className='single-character'>
            {singleCharacter && (
                <div key={singleCharacter.char_id}>
                    <img src={singleCharacter.img} alt={singleCharacter.name} height={200} style={{ marginTop: 0, padding: '10px' }} />
                    <h1 >{singleCharacter.name}</h1>
                    <h2>Nickname: {singleCharacter.nickname}</h2>
                    <h3>Occupations:</h3>
                    {
                        singleCharacter.occupation.map(e => {
                            return (
                                <div key={e}>
                                    <h4>{e}</h4>
                                </div>
                            );
                        })
                    }
                    <h3>Birthday: {singleCharacter.birthday}</h3>
                    <h3>Status: {singleCharacter.status}</h3>
                    <h2>Played by: {singleCharacter.portrayed}</h2>
                </div>
            )}
        </div>
    );
}

export default SingleCharacter