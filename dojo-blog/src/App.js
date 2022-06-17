
import { memo } from 'react';
import './App.css';

function App() {

  // dynamic variables 

  const title = "Potter World";
  const memb = 567428;
  const likes = '1K';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{memb} members</p>
        <p>{likes} Liked</p>
      </div>
    </div>
  );
}

export default App;
