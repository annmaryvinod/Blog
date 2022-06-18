const Home = () => {

    const handleClick = () =>{
        console.log("hahahaha");
    }

    const handle =() =>{
        console.log("Already invoked!");
    }

    const hello =(name)=>{
        console.log('hello ' + name);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handle()}>Click</button>
            <br />
            <button onClick = {()=> {hello('hari')}}>Click This</button>
        </div>
     );
}
 
export default Home;