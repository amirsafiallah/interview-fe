import "./styles.css";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function calculatePrimes() {
  const start = parseInt(document.getElementById("start").value, 10);
  const end = parseInt(document.getElementById("end").value, 10);
  let primesCount = 0;

  if (!isNaN(start) && !isNaN(end)) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primesCount += 1;
      }
    }
    document.getElementById("result").textContent = `the result between 
      ${start} and ${end} is ${primesCount}`;
  } else {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
  }
}

document
  .getElementById("calculatePrimes")
  .addEventListener("click", calculatePrimes);
