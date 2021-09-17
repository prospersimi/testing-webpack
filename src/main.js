import './css/styles.css';

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let fullDate = document.getElementById('date').value;
  console.log(fullDate);

  let date = new Date(fullDate);
  let currentDate = new Date();

  let year = date.getFullYear();
  let year2 = currentDate.getFullYear();
  let solution = year - year2;

  let month = date.getMonth();
  let month2 = currentDate.getMonth();
  let solution2 = month - month2;

  let hour = date.getHours();
  let hour2 = currentDate.getHours();
  let solution3 = hour - hour2;
  Number(solution3);

  let minute = date.getMinutes();
  console.log(minute);


  let second = date.getSeconds();
  console.log(second);

  const yearSolution = document.querySelector('.year');
  yearSolution.innerHTML = solution;
  const monthSolution = document.querySelector('.month');
  monthSolution.innerHTML = solution2;
  const hourSolution = document.querySelector('.hour');
  hourSolution.innerHTML = solution3;
});
