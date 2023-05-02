import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function About() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies').then((response) => {
            // console.log(response.data);
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])
    return (
        <div className='d-flex flex-wrap'>
            {data && data.map((value, index) => 
            <div key={value.Title} className='mx-2' >
                <p>{value.Title ? `Title : ${value.Title}` : ""}</p>
                <p>{value.Poster ? <img src={value.Poster} alt='poster' /> : "Poster : No poster"}</p>
            </div>)}

        </div>
    )
}
