import React, {useState} from 'react'
import Restaurant from "./Restaurant"
import queryString from "query-string"
import axios from "axios"

const Search = ({favoriteRestaurant, removeRestaurant, dataRestaurants}) => {

    // API key & URL
    const API_KEY = "uUyppNvA2lSCLSK6RaE2D-4mk9kukC1gaeC75hG1SbNgWj_UA9405pv_tSSah_k8PasAYana1F1f0M3oFmP9L8WJTT5isOtOyW8gxIoUiNpS5LLNScMLgm3EHTspYXYx"
    const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"

    // Hooks
    const [params, setParams] = useState({
        term: "",
        location: "",
    })

    const [restaurants, setRestaurants] = useState([
        {
            
        }
    ])

    const [home, setHome] = useState(true)

    const [showAlert, setShowAlert] = useState(false)

    const [fetchResponse, setFetchResponse] = useState()

    // Functions
    const fetchData = async (e) => {
        setHome(false)
        e.preventDefault();

        const queries = queryString.stringify(params)
        let config = {
            method: 'get',
            url: `${BASE_URL}${queries}`,
            headers: { 
                Authorization: `Bearer ${API_KEY}`
            }
          };
          
          axios(config)
          .then(function (response) {
            setRestaurants(response.data.businesses);
            if(response.data.businesses.length===0){
                setShowAlert(true)
                setTimeout(function(){ 
                    setShowAlert(false); 
                    setHome(true)
                }, 3000);
                
            };
    
          })
          .catch(function (error) {
            console.log(error);
          });  

            setParams({
                term: "",
                location: ""
            });

    }

    const createParams = (event) => {
        const {name, value} = event.target;

        setParams(prevInput => {
            return {
            ...prevInput,
            [name]: value
        }})
        
    }

    // Main Component
    return (
        <div >
            <form onSubmit={fetchData} className="center" >
                <input onChange={createParams} type="text" name="term" required="required" placeholder="Search for a food or restaurant" value={params.term} className="textbox"/>
                <input onChange={createParams} type="text" name="location" required="required" placeholder="Search for a location" value={params.location} className="textbox"/>
                <input type="submit" value="Search"/>
            </form>

            <div className="centerkinda">
                {home && <h1 className="center">Search for a food or a restaurant!</h1>}
                {
                (restaurants.length >= 1) 
                    ? 
                    restaurants.map(restaurant => <Restaurant key={Math.random() * 1000000} restaurant={restaurant} response={fetchResponse} favoriteRestaurant={favoriteRestaurant} removeRestaurant={removeRestaurant} restaurants={restaurants} dataRestaurants={dataRestaurants}/>) 
                    :   
                    null
                }
                {showAlert && <div className="alert alert-danger" role="alert">Please type in another search</div>}
            </div>
           
        </div>
    )
}

export default Search
