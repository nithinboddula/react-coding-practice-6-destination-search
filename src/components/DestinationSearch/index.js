import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachUser => {
      const nameInLowerCase = eachUser.name.toLowerCase()
      return nameInLowerCase.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search"
            className="input-element"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="logo"
            alt="search icon"
          />
        </div>
        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
