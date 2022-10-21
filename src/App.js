import React from 'react';
import backendAPI from './api/backendAPI';
import SearchBar from "./components/SearchBar";
import Route from './components/Route';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Home from './components/Home';
import SearchResults from './components/SearchResults';


class App extends React.Component {
  
  state = {
    products: []
  }

  componentDidMount(){
   
  }

  //search for single product by name
  onProductSearch = async (query) => {
    
    //do nothing if searchbar is empty
    if(query === ''){
      return;
    }
    
    const response = await backendAPI.get(`/products/search`,{
      params:{
        q: query 
      }
    });

    this.setState({products: response.data}, () => {
      this.updateURL();
    } );
    
    
  }

  //notify user of empty search result
  updateURL = () => {
     //change url
     window.history.pushState({}, '', '/results');

     //tell components url has updated 
     const navEvent = new PopStateEvent('popstate');
     window.dispatchEvent(navEvent);
  }

  
  render(){

    return (
      <div className="ui container">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Header />
          <SearchBar callBack={this.onProductSearch}/>
          <Categories />
        </Route>
        <Route path="/products">
          <Header />
          <SearchBar callBack={this.onProductSearch}/>
          <Products />
        </Route>
        <Route path="/results">
          <Header />
          <SearchBar callBack={this.onProductSearch}/>
          <SearchResults products={this.state.products}/>
        </Route>
      </div>
    );

  }
  
}

export default App;
