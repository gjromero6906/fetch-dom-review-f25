import { getRecipes, getRecipeById } from './fetch-helpers.js';
import { renderRecipes, renderRecipeDetails } from './dom-helpers.js';

const errorMessage = document.querySelector('#error-message');

// Fetch and render recipes on page load
getRecipes().then((recipes) => {
  if (recipes === null) {
    errorMessage.textContent = 'Failed to load recipes.';
    return;
  }
  renderRecipes(recipes);
});

// Event delegation: click a recipe to see its details
const recipesList = document.querySelector('#recipes-list');
recipesList.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  if (!li) return;

  errorMessage.textContent = '';

  getRecipeById(li.dataset.recipeId).then((recipe) => {
    if (recipe === null) {
      errorMessage.textContent = 'Failed to load recipe details.';
      return;
    }
    renderRecipeDetails(recipe);
  });
});
