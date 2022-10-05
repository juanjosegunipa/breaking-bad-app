import axios from 'axios';
import { useState, useEffect } from 'react';

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get('https://breakingbadapi.com/api/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='quotes-page'>
            {
                quotes.map(e => {
                    return (
                        <div key={e.quote_id} className='quotes'>
                            <h2>{e.quote}</h2>
                            <h3>Author: {e.author}</h3>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Quotes