const Home = () => {

    const handleClick = () =>{
        console.log("hahahaha");
    }

    const handle =() =>{
        console.log("Already invoked!");
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handle()}>Click</button>
        </div>
     );
}
 
export default Home;