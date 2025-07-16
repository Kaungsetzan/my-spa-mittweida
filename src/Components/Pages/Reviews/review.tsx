import useSWR, { mutate } from 'swr';
import { useState } from 'react';
import styles from './review.module.css'

export default function Review() {
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');
    const [name,setName] = useState(true);
    const hideName = ()=> setName(!name);

    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const backendUrl = 'http://172.17.214.206:3000';
    const { data: reviews, error, isLoading } = useSWR(`${backendUrl}/review`, fetcher);


    async function handleSubmit() {
        if (!content.trim()) return;

        await fetch(`${backendUrl}/review`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name && username.trim() ? username : null, content }),
        });

        setContent('');
        mutate('http://localhost:3000/review');
    }


    return (
        <div className={styles.reviewText}>
            <h2>Rate this place</h2>
            <textarea className={styles.reviewInput}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Leave a review"
            />
            <p className={name? styles.show : styles.hide}>How would you like to be called?</p>
            <input className={name? styles.showInput : styles.hide} placeholder="Your name" type="text" value={username}
                   onChange={(e) => setUsername(e.target.value)}/>
            <div className={styles.buttonBox}>
                <button onClick={hideName} className={name? styles.notselect : styles.select}>Anonymous</button>
                <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
            </div>
            <div className={styles.line}></div>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading reviews</p>}
            <div className="reviews-list">

            <ul ><h2>Reviews</h2>
                {reviews?.map((r: any) => (
                    <li className="map-reviews" key={r.id}><h4>{r.name}</h4>{r.content}</li>
                ))}
            </ul></div>
        </div>
    );
}
