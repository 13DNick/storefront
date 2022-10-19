import React from "react";

const Home = (props) => {
    return(
        <div>
            
            <div className="ui center aligned container text">
                <button className="ui green animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                    <div className="visible content">
                        Enter Ecommerce Store
                    </div>
                    <div className="hidden content">
                        <i aria-hidden="true" className="unlock alternate icon"></i>
                    </div>
                </button>

                <h1 style={{marginTop: '0.3em', fontSize: '4em', fontWeight:'normal'}}>Application Overview</h1>
                <div role="list" className="ui animated middle aligned list relaxed" style={{fontSize: '1.2em'}}>
                    <div role="listitem" className="item"><div className="header">Fullstack Application</div></div>
                    <div role="listitem" className="item"><div className="header">CRUD support for categories and their products</div></div>
                    <div role="listitem" className="item"><div className="header">Login/Logout support</div></div>
                    <div role="listitem" className="item"><div className="header">Secured endpoints</div></div>
                </div>
                <img src="/banner.jpeg" alt="banner" className="ui rounded huge image"></img>

                <hr style={{marginTop: '1.5em'}}/>
            </div>
            
            
            
            <div className="ui center aligned container text">
                <h1 style={{marginTop: '0.3em', fontSize: '4em', fontWeight:'normal'}}>Technologies Utilized</h1>
                
                <div className="ui centered vertically divided grid">
                    <div className="stretched three column row">
                        <div className="column"><img src="database.png" alt="database logo" className="ui rounded small image"/></div>
                        <div className="column">
                            <div className="ui relaxed list">
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">MySQL</div>
                                        <div className="description">creation of relational database schema</div>
                                    </div>
                                </div>
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">Postman</div>
                                        <div className="description">manual testing of API endpoints</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column"><img src="mysql.png" alt="mysql logo" className="ui rounded small image"/></div>
                    </div>
                    
                    <div className="stretched three column row">
                        <div className="column"><img src="java.png" alt="java logo" className="ui rounded image"/></div>
                        <div className="column">
                            <div className="ui relaxed list">
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">Java + Spring Boot + Maven</div>
                                        <div className="description">development of the Restful API server</div>
                                    </div> 
                                </div>
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">Hibernate + Jackson</div>
                                        <div className="description">map object-oriented domain model to relational database
                                        and convert between JSON and Java POJO's</div>
                                    </div> 
                                </div>
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">Spring Security</div>
                                        <div className="description">secure endpoints through established roles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column"><img src="spring-boot-maven.png" alt="spring boot and maven logo" className="ui rounded image"/></div>
                    </div>

                    <div className="stretched three column row">
                        <div className="column"><img src="react.png" alt="react logo" className="ui rounded small image"/></div>
                        <div className="column">
                            <div className="ui relaxed list">
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">React.js</div>
                                        <div className="description">development of the frontend client application</div>
                                    </div>
                                </div>
                                <div role="listitem" className="item">
                                    <div className="content">
                                        <div className="header">Semantic UI</div>
                                        <div className="description">styling of the user interface</div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="column"><img src="semanticui.png" alt="semantic-ui logo" className="ui rounded small image"/></div>
                    </div>
                </div>
                <hr style={{marginTop: '1.5em'}}/>
            </div>

            <div className="ui center aligned container text">
                <div className="ui centered vertically divided grid">
                    <div className="two column row">
                        <div className="column">
                            <button className="ui green animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                <div className="visible content">
                                    Enter Ecommerce Store
                                </div>
                                <div className="hidden content">
                                    <i aria-hidden="true" className="unlock alternate icon"></i>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="ui primary animated button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                <div className="visible content">
                                    Developer LinkedIn Profile
                                </div>
                                <div className="hidden content">
                                    <i aria-hidden="true" className="linkedin icon"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;