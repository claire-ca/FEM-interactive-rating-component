const button = document.querySelector('button');
button.addEventListener('click', () => {
  // When the submit button is clicked
  let selected = document.querySelector('input[name="rating"]:checked'); // Get the input that has been selected (will return null if none selected)

  if (selected) {
    let ratingGiven = selected.value; // Store the value of the radio group in a variable
    console.log(ratingGiven); // do something when the button is clicked
    const userRating = document.querySelector('#user-rating'); // Grab the span element that will show the rating
    // Insert the value of the radio variable in here
    userRating.innerHTML = ratingGiven;
    // Hide the start state rating card
    const startStateCard = document.querySelector('.rating-card-start-state');
    startStateCard.style.display = 'none';
    // Show the Thank you rating card
    const thankYouStateCard = document.querySelector(
      '.rating-card-thank-you-state'
    );
    thankYouStateCard.style.display = 'flex';
  } else {
    console.log('Please select a rating');
  }
});
