// Function to store theme preference
function saveTheme(themeColor) {
    localStorage.setItem('preferredTheme', themeColor);
  }
  
  // Function to load and apply theme preference
  function loadTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
      document.body.style.backgroundColor = savedTheme;
    }
  }
  
  // Change theme button logic
  document.getElementById('themeBtn').addEventListener('click', () => {
    const newColor = (document.body.style.backgroundColor === 'rgb(34, 34, 34)') ? '#3333cc' : '#222';
    document.body.style.backgroundColor = newColor;
    saveTheme(newColor);
  });
  
  // Bounce animation button logic
  document.getElementById('animateBtn').addEventListener('click', (e) => {
    e.target.classList.add('bounce');
    setTimeout(() => {
      e.target.classList.remove('bounce');
    }, 1000);
  });
  
  // Load saved theme on page load
  window.onload = loadTheme;
  