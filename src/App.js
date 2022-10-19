import React from 'react';
import backendAPI from './api/backendAPI';
import SearchBar from "./components/SearchBar";
import Temp from './components/Temp';
import Route from './components/Route';
import Header from './components/Header';
import Categories from './components/Categories';


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
        <Header />
        < SearchBar callBack={this.onProductSearch} />
        <Route path="/categories">
          <Categories />
        </Route>
        < Temp product={this.state.product}/>
      </div>
    );

  }
  
}

export default App;
