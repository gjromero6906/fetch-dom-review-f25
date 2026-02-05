export const getRecipes = () => {
  return fetch('https://dummyjson.com/recipes?limit=9')
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.recipes;
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};

export const getRecipeById = (id) => {
  return fetch(`https://dummyjson.com/recipes/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};
