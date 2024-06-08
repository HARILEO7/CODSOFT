document.addEventListener('DOMContentLoaded', function () {
    const inputValue = document.getElementById('user-input');
    const buttons = document.querySelectorAll('.calc-keys button');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        const value = e.target.innerHTML.trim();
  
        if (value === 'AC') {
          inputValue.innerText = '0';
        } else if (value === 'DEL') {
          inputValue.innerText = inputValue.innerText.slice(0, -1) || '0';
        } else if (value === '=') {
          try {
            inputValue.innerText = eval(inputValue.innerText);
          } catch {
            inputValue.innerText = 'Error';
          }
        } else {
          if (inputValue.innerText === '0' || inputValue.innerText === 'Error') {
            inputValue.innerText = value;
          } else {
            inputValue.innerText += value;
          }
        }
      });
    });
  });
  