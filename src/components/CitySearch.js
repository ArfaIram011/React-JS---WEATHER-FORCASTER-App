import React,{useState} from 'react'
import './css/Style.css'

function CitySearch(props) {
const [searchInputValue,setSearchInputValue]=useState('')
const onFormSubmit = (event) =>{
    event.preventDefault();
    console.log(searchInputValue)
    props.onSearchSubmit(searchInputValue)
    
}

    return (
        <div>
            <form className="search-loaction" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="Which city?"
                    onChange={(event) => setSearchInputValue( event.target.value )}
                    className="form-control text-muted form-rounded p-4 shadow-sm" />
            </form>
        </div>
    )
}

export default CitySearch