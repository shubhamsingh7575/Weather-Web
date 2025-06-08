import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL = 
    "https://images.unsplash.com/photo-1592656375935-e0a01f4db431?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = 
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL =
    "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        info.humidity > 80
                         ? RAIN_URL 
                         : info.temp > 15 
                         ? HOT_URL 
                         :COLD_URL
                        }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 80
                         ? <ThunderstormIcon/>
                         : info.temp > 15 
                         ? <SunnyIcon/> 
                         :<AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Min Temperature: {info.temp_min}&deg;C</p>
                        <p>Max Temperature: {info.temp_max}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like: {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>

    );
}