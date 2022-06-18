import { useState } from "react";

const Home = () => {
    const [name,setName]=useState('mario');
    const [age,setAge]=useState(30);

    const handleClick=()=>{
        setName('luigi');
        setAge(90);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Clickme</button>
        </div>
     );
}
 
export default Home;