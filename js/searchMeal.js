const submit = document.getElementById("submit");
const results = document.querySelector(".random-meal");
const find = document.getElementById("find");
const placeholder = document.getElementById("placeholder");

const searchMeal = async (search) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => {
      let meals = data.meals;
      let ingredientsArray = [];

      for (let i = 1; i < 21; i++) {
        if (meals[`strIngredient${i}`]) {
          ingredientsArray.push(
            "<li>" +
              meals[0][`strIngredient${i}`] +
              "-" +
              meals[0][`strMeasure${i}`] +
              "</li>"
          );
        }
      }

      console.log(meals);

      randomMeal.innerHTML = meals
        .map(
          (meal) =>
            `
          <div class="box">
            <img src=${meal.strMealThumb} alt="picture of the meal">
            <div class="text">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions}</p>
            <br>
            <em>${meal.strArea}</em>
            <h2>Ingrédients</h2>
            <ul>${ingredientsArray.join("")}</ul>
            </div>
            </div>
            `
        )
        .join("");
    });
};

find.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(placeholder.value);
  searchMeal(placeholder.value);
});
