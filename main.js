
const searchMeal = () => {
    const searchInput = document.getElementById("search-input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = foodIteams => {
    const mealContainer = document.getElementById("meal-section");
    mealContainer.innerHTML = '';

    foodIteams.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3 col-sm-6';
        mealDiv.innerHTML = `
         <div onclick="getDetails('${meal.strMeal}')" style="cursor:pointer;" class="single-meal" id="meal-pointer">
            <img src=${meal.strMealThumb} alt="">
            <h4>${meal.strMeal}</h4>
        </div>
        `;
        mealContainer.appendChild(mealDiv);

        document.getElementById('search-meal-wrap').addEventListener('click', function(){
            document.getElementById('search-meal-wrap').style.display="none";
        })

    });
}

const getDetails = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.meals));
}
const showDetails = (ingridients) => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = '';

    ingridients.forEach(ingridient => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'single-meal-detail';
        detailDiv.innerHTML = `
                <img src=${ingridient.strMealThumb} alt="">
                    <div class="ingredient-title">
                    <h2>${ingridient.strMeal}</h2>
                    <h6>Ingredients</h6>

                    <div class="meal-detail-list">
                        <ul>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient1}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient2}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient3}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient4}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient5}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient6}</li>
                            <li><i class="fas fa-check-square"></i>${ingridient.strIngredient7}</li>
                        </ul>
                    </div>
                </div>
        `;
        mealDetails.appendChild(detailDiv);
    })

}