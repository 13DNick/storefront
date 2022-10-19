import React from 'react';


class SearchBar extends React.Component{


    state = {
        text: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.callBack(this.state.text);
    }
    
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Product Search</label>
                        <input type="text" placeholder="Search Product Here ..." 
                            onChange={(e) => {this.setState({text: e.target.value})}} 
                            value={this.state.text}    
                        />
                    </div> 
                </form>   
            </div>
        );
    } 
}

export default SearchBar;