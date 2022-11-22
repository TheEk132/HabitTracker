const submitBtn = document.querySelector('.submitBtn');
const newHabit = document.querySelector('#newHabit');
let habits = [];

submitBtn.addEventListener('click', () => {
  habits.push(newHabit.value);
  console.log(habits);
});
