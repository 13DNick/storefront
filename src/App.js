import React from 'react';
import backendAPI from './api/backendAPI';
import SearchBar from "./components/SearchBar";
import Route from './components/Route';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Home from './components/Home';

class App extends React.Component {
  
  state = {
    product: []
  }

  componentDidMount(){
   
  }

  //search for single product
  onProductSearch = async (text) => {
    const response = await backendAPI.get(`/product/${text}`);

    this.setState({product: response.data}); 
  }

  


  render(){

    return (
      <div className="ui container">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </div>
    );

  }
  
}

export default App;
