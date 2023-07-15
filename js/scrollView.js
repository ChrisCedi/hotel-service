//next view section
const nextView = () => {
  document.getElementById("section2").scrollIntoView({
    behavior: "smooth",
  });
};

let buttonHome = document.getElementById("next-section-button");

buttonHome.addEventListener("click", nextView);

//preview view section

const returnView = () => {
  document.getElementById("section1").scrollIntoView({
    behavior: "smooth",
  });
};

let returnButton = document.getElementById("arrow");

returnButton.addEventListener("click", returnView);
