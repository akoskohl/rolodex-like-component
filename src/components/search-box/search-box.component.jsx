import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        // why is it now working?
        const { onSearchChange } = this.props
        return (
            <input 
            className={`search-box ${this.props.className}`}
            type="search" 
            placeholder={this.props.placeholder}
            onChange={this.props.onSearchChange}
            />
        )
    }
}

export default SearchBox;