import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    
    let[city,setCity]= useState("");
    let[error,setError] = useState(false);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="9dc451d6d7ecae566af0a15bb423241c";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            //    console.log(jsonResponse);
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
      
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
       try{
            event.preventDefault();
            console.log("City Name: ", city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
       }catch{
            setError(true);
       }
    };
    return(
        <div className="SearchBox">
            {/* <h3>Search for the Wheather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                 label="City Name"
                  variant="outlined" 
                required value={city} 
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" >
                    Search
                </Button>
                {error && <p style={{color:'red'}}>City not found! Please try again.</p>}
            </form>
        </div>
    )
}