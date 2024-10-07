// App.jsx
import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../../declarations/Main';

const agent = new HttpAgent();
const mainActor = Actor.createActor(idlFactory, { agent });

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        async function fetchGreeting() {
            const result = await mainActor.greet("Visitor");
            setGreeting(result);
        }
        fetchGreeting();
    }, []);

    return (
        <div>
            <h1>Welcome to the Motoko Starter Template</h1>
            <p>{greeting}</p>
        </div>
    );
}

export default App;
