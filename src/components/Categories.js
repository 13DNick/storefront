import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import backendAPI from "../api/backendAPI";

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

    const getImage = (name) => {
        if(name === 'electronics'){
            return 'electronics.jpeg';
        } else if(name === "men's clothing"){
            return 'mclothing.webp';
        } else if(name === "women's clothing"){
            return 'fclothing.jpg';
        } else if(name === 'jewelery'){
            return 'jewelry.jpg';
        }
    } 

    const processName = (name) => {
        if(name === 'jewelery'){
            return 'Jewelry';
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const renderedCategories = categories.map(category => {
        return(
            <a className="ui card" key={category.id}  href="/category" onClick={(e) => handleClick(e, category)}>
                <img className="ui image medium floated centered" src={getImage(category.name)} alt="" style={{marginTop: "1em"}}/>
                <div className="content">
                    <div className="header">{processName(category.name)}</div>
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