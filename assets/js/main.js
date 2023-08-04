console.log("JS Loaded");

// Select the button and the element where the advice will be displayed
const adviceBtn = document.querySelector("#advBtn");
const adviceID = document.querySelector("#adviceID");
const adviceText = document.querySelector("#adviceText p");
// API endpoint for getting random advice
const adviceAPI = "https://api.adviceslip.com/advice";

// Fetch advice from the API endpoint
const fetchAdvice = () => {
  fetch(adviceAPI)
    .then((response) => {
      // Check if the response was successful (status code 200)
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Create the advice object
      const adviceData = data.slip;
      // Display the advice on the page
      adviceID.textContent = `#${adviceData.id}`;
      adviceText.textContent = adviceData.advice;
    })
    .catch((error) => {
      // Handle any errors that may occur
      console.error("There was a problem with the request:", error.message);
    });
};
fetchAdvice()

adviceBtn.addEventListener("click", fetchAdvice);
