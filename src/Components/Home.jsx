function Home(props) {

    props.setBackground("home");
    
    return ( 
        <main className="home">
            <div className="content">
                <section>
                    <p className="title">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p className="description">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </section>
                <div className="circle"><p>EXPLORE</p></div>
            </div>
        </main>
    );
}

export default Home;