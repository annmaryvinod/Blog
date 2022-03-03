const Home = () => {

    const handleClick = () => {
        console.log("Hello,ninjas!");
    }


    const handleClickAgain = (name) => {
        console.log("Hello " + name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click me</button>
            <button onClick = {()=> {handleClickAgain("mario")}}>Click Me Again</button>
            {/* ()=>   represents an anonymous function */}
        </div>
     );
}
 
export default Home;