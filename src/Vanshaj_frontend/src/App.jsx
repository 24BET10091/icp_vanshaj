import { useState } from 'react';
import { Vanshaj_backend } from 'declarations/Vanshaj_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Vanshaj_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      
      <h1>Hello, Vanshaj!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" />
        </label>
        <button type="submit">Greet</button>
      </form>
      <p>{greeting}</p>

      {/* develop a basic frontend*/}
      <h1>Basic Frontend</h1>
      <p>Develop a basic frontend that allows the user to enter their name and then displays a greeting message.</p>
      <p>When the user enters their name and clicks the "Greet" button, the frontend should send a request to the backend to get a greeting message for the user.</p>
      
    </main>
  );
}

export default App;
