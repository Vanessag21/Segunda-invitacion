const fadeInFirst = document.querySelector('#dressCodeWomenFirst');
const fadeInSecond = document.querySelector('#dressCodeWomenSecond');
const fadeInThird = document.querySelector('#dressCodeManFirst');
const fadeInFourth = document.querySelector('#dressCodeManSecond');

const rotateInFirst = document.querySelector('#FirstFlower');
const rotateInSecond = document.querySelector('#SecondFlower');
const rotateInThird = document.querySelector('#ThirdFlower');
const rotateInFourth = document.querySelector('#FourthFlower');

const observerFadeIn = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-element');
      observerFadeIn.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.2 
});


observerFadeIn.observe(fadeInFirst);
observerFadeIn.observe(fadeInSecond);
observerFadeIn.observe(fadeInThird);
observerFadeIn.observe(fadeInFourth);

const observerRotate = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateAnimationNegative');
      observerFadeIn.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.2 
});
const observerRotatePositive = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateAnimation');
      observerFadeIn.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.2 
});
observerRotatePositive.observe(rotateInFirst);
observerRotatePositive.observe(rotateInThird);

observerRotate.observe(rotateInSecond);
observerRotate.observe(rotateInFourth);

function sendConfirmation(){
  const inputElements = document.getElementById("confirmationContainer")
  const confirmationText = document.getElementById("ConfirmationText")
  const confirmationTextContainer = document.getElementById("ConfirmationTextContainer")

  inputElements.classList.add("hidden")
  confirmationTextContainer.classList.remove("hidden")
  confirmationText.classList.remove("hidden")

  confirmationTextContainer.classList.add("flex")
  confirmationText.classList.add("flex")
  confirmationText.classList.add("fade-in-element")
}