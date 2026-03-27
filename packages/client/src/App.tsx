import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App
