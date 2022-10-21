import React, { useEffect, useState } from "react";
import backendAPI from "../api/backendAPI";
import Link from "./Link";

const Categories = (props) => {
    
    const [categories, setCategories] = useState([]);

    //load all categories on component render
    useEffect(() => {
        getCategories();
    }, []);

    //retrieve all categories
    const getCategories = async () => {
        const response = await backendAPI.get('/categories');
        setCategories(response.data);
    }

    const handleClick = (e, category) => {
        e.preventDefault();
        props.onCategorySelect(category);
        updateURL();
    }

    const updateURL = () => {
        //change url
        window.history.pushState({}, '', '/category');
   
        //tell components url has updated 
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
     }

    const renderedCategories = categories.map(category => {
        return(
            <a className="ui card" key={category.id}  href="/category" onClick={(e) => handleClick(e, category)}>
                <img className="ui image small floated centered" src={category.products[0].imageURL} alt=""/>
                <div className="content">
                    <div className="header">{category.name}</div>
                </div>
                <div className="extra content">{category.products.length} products listed</div>
            </a>
        );
    });

    return(
        <div className="ui centered cards two">
            {renderedCategories}
        </div> 
    );
    
}

export default Categories;