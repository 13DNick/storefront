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

    const renderedCategories = categories.map(category => {
        return(
            <div className="ui card" key={category.id}>
                <img className="ui image small floated centered" src={category.products[0].imageURL} alt=""/>
                <div className="content">
                    <div className="header">{category.name}</div>
                </div>
                <div className="extra content">{category.products.length} products listed</div>
            </div>
        );
    });

    return(
        <div className="ui centered cards two">
            {renderedCategories}
        </div>
    );
    
}

export default Categories;