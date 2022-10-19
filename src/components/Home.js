import React from "react";

const Home = (props) => {
    return(
        <div>
            <button className="ui green fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>Enter Ecommerce Store</button>
            <div className="ui center aligned container text">
                <h1 style={{marginTop: '0.3em', fontSize: '4em', fontWeight:'normal'}}>Application Overview</h1>
                <div role="list" className="ui animated middle aligned list relaxed" style={{fontSize: '1.2em'}}>
                    <div role="listitem" className="item"><div className="header">Fullstack CRUD Application</div></div>
                    <div role="listitem" className="item"><div className="header">Full CRUD support for categories and their products</div></div>
                    <div role="listitem" className="item"><div className="header">Login/Logout support</div></div>
                    <div role="listitem" className="item"><div className="header">Secured endpoints</div></div>
                </div>
                <img src="/banner.jpeg" alt="banner" className="ui rounded huge image"></img>

                <hr style={{marginTop: '1.5em'}}/>
            </div>
            
            
            
            <div className="ui center aligned container text">
                <h1 style={{marginTop: '0.3em', fontSize: '4em', fontWeight:'normal'}}>Technologies Utilized</h1>
                <div className="ui vertically divided grid">
                    <div className="stretched three column row">
                        <div className="column"><img src="java.png" alt="java logo" className="ui rounded image"/></div>
                        <div className="column">
                            <div className="ui relaxed list">
                                <div role="listitem" className="item">
                                    <div className="header">Java + Spring Boot + Maven</div>
                                    development of the Restful API server
                                </div>
                                <div role="listitem" className="item">
                                    <div className="header">Hibernate + Jackson</div>
                                    map object-oriented domain model to relational database
                                    and convert between JSON and Java POJO's
                                </div>
                                <div role="listitem" className="item">
                                    <div className="header">Spring Security</div>
                                    secure endpoints through established roles
                                </div>
                            </div>
                        </div>
                        <div className="column"><img src="spring-boot-maven.png" alt="spring boot and maven logo" className="ui rounded image"/></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;