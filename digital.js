function toggleIngredients(recipe) {
    var ingredients = document.getElementById(recipe + '-ingredients');
    if (ingredients.style.display === 'none') {
      ingredients.style.display = 'block';
    } else {
      ingredients.style.display = 'none';
    }
  }