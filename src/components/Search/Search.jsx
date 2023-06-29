import React, {Component} from 'react'

class Search extends Component{
    state={
       value: '' 
    }
    
//без деструкрурізаціі
    // handleChange=(event)=> {
//         this.setState({value: event.target.value})
//     }
//із деструкрурізацією
handleChange=({target: {value}})=> {
    this.setState({value})
}
handleSubmit = (event)=> {
  event.preventDefault()
this.props.handleSearch(this.state.value)
  
}
render() {
    return (
        <>
    <form className="form" onSubmit={this.handleSubmit}>
      <input
        className="input"
        type="search"
        area-label="Search"
        placeholder="Search"
        onChange={this.handleChange}
        value={this.state.value}
      />
        <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
    </form>
  </>
      )
}
 
}

export default Search
