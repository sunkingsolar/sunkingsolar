// Function to set dark mode preference in local storage
function setDarkModePreference(isDarkMode) {
	localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
	const switchMode = document.getElementById('switch-mode');
	const isDarkMode = switchMode.checked;
  
	if (isDarkMode) {
	  document.body.classList.add('dark');
	} else {
	  document.body.classList.remove('dark');
	}
  
	// Save the dark mode preference in local storage
	setDarkModePreference(isDarkMode);
  }
  
  // Function to load dark mode preference from local storage
  function loadDarkModePreference() {
	const storedDarkMode = localStorage.getItem('darkMode');
	const switchMode = document.getElementById('switch-mode');
  
	if (storedDarkMode === 'true') {
	  switchMode.checked = true;
	  toggleDarkMode();
	}
  }
  
  // Attach event listener to switch mode checkbox
  const switchMode = document.getElementById('switch-mode');
  switchMode.addEventListener('change', toggleDarkMode);
  
  // Load dark mode preference on page load
  loadDarkModePreference();
  
  // Your existing code for side menu toggle and other functionality
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
  
  allSideMenu.forEach(item => {
	const li = item.parentElement;
  
	item.addEventListener('click', function () {
	  allSideMenu.forEach(i => {
		i.parentElement.classList.remove('active');
	  })
	  li.classList.add('active');
	})
  });
  
  // TOGGLE SIDEBAR
  const menuBar = document.querySelector('#content nav .bx.bx-menu');
  const sidebar = document.getElementById('sidebar');
  
  menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
  });
  
  // Rest of your existing code for search and window resize handling
  