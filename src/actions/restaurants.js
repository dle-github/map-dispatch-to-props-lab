export const addRestaurant = (restaurant) => {
  console.log('the restaurant is:', restaurant)
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
