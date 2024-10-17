import React from 'react'
import './SearchBar.css'
import searchicon from '../../assets/searchicon.svg'
import  useState from 'react'


const SearchBar = () => {

  // const [state , changeState] = useState

  // function searchHandler()
  // {
    
  // }

  return (
    <div className='searchBar-container'>
        <input id='input' type="text" placeholder='Search..' />
        <img src={searchicon} alt="" id='searchicon' style={{cursor:'pointer'}}/>
    </div>
  )
}

export default SearchBar