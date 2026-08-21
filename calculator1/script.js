const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (btn.id === 'clear') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value); // calculate
      } catch {
        display.value = 'Error'; // handle invalid input
      }
    } else {
      display.value += value;
    }
  });
});
