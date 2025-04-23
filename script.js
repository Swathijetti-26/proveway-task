// script.js
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.box input').forEach(input => input.checked = false);

    box.classList.add('selected');
    box.querySelector('input').checked = true;

    // Change total price based on selection
    const totalDisplay = document.querySelector('.total');
    const value = box.querySelector('input').value;
    if (value === "1") {
      totalDisplay.textContent = 'Total : $10.00 USD';
    } else if (value === "2") {
      totalDisplay.textContent = 'Total : $18.00 USD';
    } else if (value === "3") {
      totalDisplay.textContent = 'Total : $24.00 USD';
    }
  });
});

// Default selected
document.querySelector('.box.popular').classList.add('selected');