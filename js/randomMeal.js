// 1- tester dans l'url si le lien fonctionne
// 2- créer const de la div .app
// 3- créer un fech jusqu'à afficher les données dans la console
// 4- On affiche les données à l'écran (innerHTML)
// à afficher : le nom du repas, origine (strArea), les instructions, photo

// BONUS
// Vidéo youtube qu'on peut jouer directement
// Lister les ingrédients / Mesures

const randomMeal = document.querySelector(".random-meal");

const getMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => {
      let meal = data.meals[0];
      let youtube = data.meals[0].strYoutube.replace("watch?v=", "embed/");
      let ingredientsArray = [];

      for (let i = 1; i < 21; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsArray.push(
            "<li>" +
              meal[`strIngredient${i}`] +
              "-" +
              meal[`strMeasure${i}`] +
              "</li>"
          );
        }
      }

      randomMeal.innerHTML = `
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
        <iframe class="video" width="560" height="315" src=${youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
      
        `;
    });
};

getMeal();

change.addEventListener("click", () => {
  getMeal();
});
