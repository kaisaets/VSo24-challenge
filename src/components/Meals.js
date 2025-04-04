import React,{ useEffect, useState }  from 'react';
import MealItem from '../components/MealItem'


const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3002/meals')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched meals: ", data)
                setMeals(data);
     } )
    } )
    return (
        <ul id="meals">
            { 
                 meals.map(meal => <MealItem key={meal.id} meal={meal} />)// list of meals
            }
        </ul>
    )
}

export default Meals