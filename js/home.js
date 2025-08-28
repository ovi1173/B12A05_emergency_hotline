// life-counter
// heart icons functionality
document.getElementById('card-container').addEventListener('click',function(e){
  const heartCounter = document.getElementById('life-counter');
  let Counter = 0;
  if (e.target.classList.contains("heart")) {
  Counter++;
  heartCounter.innerText = Counter;
}

})