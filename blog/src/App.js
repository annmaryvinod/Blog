
import './App.css';

function App() {

  // JS code injected before return

  const title = "Welcome to the new blog!";

  const likes = 50;
  

  // for an attribute
  const link = "https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p> Liked {likes} times!</p>

        {/* direct code */}

        <p> {"Hi, I am here!"} </p>

        <p>{ [1,2,3,44] } </p>

        <p> { Math.random() * 10 } </p>



        {/* ATTRIBUTE VALUE AS A VARIABLE */}

        <a href= {link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
