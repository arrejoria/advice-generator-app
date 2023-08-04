console.log("JS Loaded");

const adviceBtn = document.querySelector("#advBtn");
const adviceID = document.querySelector("#adviceID");
const adviceText = document.querySelector("#adviceText p");
// API endpoint for getting random advice
const adviceAPI = "https://api.adviceslip.com/advice";

// Fetch advice from the API endpoint
const fetchAdvice = () => {
  adviceText.style.opacity = "0";

  fetch(adviceAPI)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const adviceData = data.slip;
      adviceID.textContent = `#${adviceData.id}`;
      adviceText.textContent = adviceData.advice;
      adviceText.style.opacity = "1";
    })
    .catch((error) => {
      console.error("There was a problem with the request:", error.message);
    });
};
fetchAdvice();

adviceBtn.addEventListener("click", () => {
  fetchAdvice();
  adviceBtn.classList.remove("rotate-animation"); 
  void adviceBtn.offsetWidth; 
  adviceBtn.classList.add("rotate-animation"); 
});
