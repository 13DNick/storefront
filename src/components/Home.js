import React from "react";
import Link from "./Link";

const Home = (props) => {
    return(
        <div>
            
            <div className="ui center aligned container text">
                <div className="ui center aligned container text">
                    <div className="ui centered vertically divided grid stackable">
                        <div className="two column row">
                            <div className="column">
                                <button className="ui green animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                    <Link href="/categories">
                                        <div className="visible content" style={{color: '#FFF'}}>
                                            Enter Ecommerce Store
                                        </div>
                                        <div className="hidden content" style={{color: '#FFF'}}>
                                            <i aria-hidden="true" className="unlock alternate icon"></i>
                                        </div>
                                    </Link>
                                </button>
                            </div>
                            <div className="column">
                                <button className="ui red animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                    <a href="https://ecommerceapi.xyz/swagger-ui.html" target="_blank" rel="noreferrer">
                                        <div className="visible content" style={{color: '#FFF'}}>
                                            View API Documentation
                                        </div>
                                        <div className="hidden content" style={{color: '#FFF'}}>
                                            <i aria-hidden="true" className="archive icon"></i>
                                        </div>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 style={{marginTop: '0.3em', marginBottom: '0.4em', fontSize: '4em', fontWeight:'normal'}}>Application Overview</h1>
                    
                <div role="list" className="ui horizontal list relaxed">
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Fullstack Application</div>
                    </div>
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>CRUD Support</div>
                    </div>
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>HTTP Secure</div>
                    </div>
                </div>

                <div role="list" className="ui horizontal list relaxed">
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Custom Jackson JSON Deserializer</div>
                    </div>
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Dynamic DB Data Population</div>
                    </div>
                </div>
            
                <div role="list" className="ui horizontal list relaxed">
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Browse or Query Products</div>
                    </div>
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Add Products To Cart</div>
                    </div>
                    <div role="listitem" className="item">
                        <div className="header" style={{fontSize: '1.4em', fontWeight: 'normal', marginBottom: '1.3em'}}>Place an Order</div>
                    </div>
                </div>
                            
                <img src="/banner.jpeg" alt="banner" className="ui rounded huge image" style={{marginTop: '1.1em'}}></img>

                <hr style={{marginTop: '3em'}}/>
            </div>
            
            
            
            <div className="ui center aligned container text">
                <h1 style={{marginTop: '0.4em', marginBottom: '0.4em', fontSize: '4em', fontWeight:'normal'}}>Technologies Utilized</h1>
                
                <div className="ui centered vertically divided grid stackable">
                    
                    <div className="stretched three column row">
                        <div className="column"><img src="java.png" alt="java logo" className="ui rounded small image centered"/></div>
                        <div className="column">
                            <div className="ui container center aligned">
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
                                </div>
                            </div>
                            
                        </div>
                        <div className="column"><img src="springboot.png" alt="spring boot and maven logo" className="ui rounded small image centered"/></div>
                    </div>

                    <div className="stretched three column row">
                        <div className="column"><img src="postman.png" alt="postman logo" className="ui rounded small image centered"/></div>
                        <div className="column">
                            <div className="ui container center aligned">
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
                        </div>
                        <div className="column"><img src="mysql.png" alt="mysql logo" className="ui rounded small image centered"/></div>
                    </div>

                    <div className="stretched three column row">
                        <div className="column"><img src="react.png" alt="react logo" className="ui rounded small image centered"/></div>
                        <div className="column">
                            <div className="ui container center aligned">
                                <div className="ui relaxed list">
                                    <div role="listitem" className="item">
                                        <div className="content">
                                            <div className="header">React.js</div>
                                            <div className="description">development of the frontend client application</div>
                                        </div>
                                    </div>
                                    <div role="listitem" className="item">
                                        <div className="content">
                                            <div className="header">Axios</div>
                                            <div className="description">send requests to backend API</div>
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
                        </div>
                        <div className="column"><img src="semanticui.png" alt="semantic-ui logo" className="ui rounded small image centered"/></div>
                    </div>

                    <div className="stretched three column row">
                        <div className="column"><img src="vultr.webp" alt="vultr logo" className="ui rounded small image centered"/></div>
                        <div className="column">
                            <div className="ui container center aligned">
                                <div className="ui relaxed list">
                                    <div role="listitem" className="item">
                                        <div className="content">
                                            <div className="header">Vultr</div>
                                            <div className="description">host database and API on an Ubuntu virtual machine</div>
                                        </div>
                                    </div>
                                    <div role="listitem" className="item">
                                        <div className="content">
                                            <div className="header">Nginx</div>
                                            <div className="description">serve API service to client</div>
                                        </div>  
                                    </div>
                                    <div role="listitem" className="item">
                                        <div className="content">
                                            <div className="header">Vercel</div>
                                            <div className="description">host frontend application</div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column"><img src="nginx.png" alt="nginx logo" className="ui rounded small image centered"/></div>
                    </div>

                </div>
                <hr style={{marginTop: '1.5em'}}/>
            </div>

            <div className="ui center aligned container text">
                <div className="ui centered vertically divided grid stackable">
                    <div className="two column row">
                        <div className="column">
                            <button className="ui green animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                <Link href="/categories">
                                    <div className="visible content" style={{color: '#FFF'}}>
                                        Enter Ecommerce Store
                                    </div>
                                    <div className="hidden content" style={{color: '#FFF'}}>
                                        <i aria-hidden="true" className="unlock alternate icon"></i>
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="column">
                            <button className="ui linkedin fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                                <a href="https://www.linkedin.com/in/nikitakoulaga" target="_blank" rel="noreferrer">
                                    <div className="visible content" style={{color: '#FFF'}}>
                                        <i aria-hidden className="linkedin icon"/>
                                        Developer LinkedIn Profile
                                    </div>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;