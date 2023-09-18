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
  
  // Function to store the selected link in localStorage
  function setSelectedLink(linkId) {
	localStorage.setItem('selectedLink', linkId);
  }
  
  // Function to get the selected link from localStorage
  function getSelectedLink() {
	return localStorage.getItem('selectedLink');
  }
  
  // Function to apply the "active" class to the selected link
  function setActiveLink() {
	const selectedLinkId = getSelectedLink();
	if (selectedLinkId) {
	  const selectedLink = document.getElementById(selectedLinkId);
	  if (selectedLink) {
		selectedLink.classList.add('active');
	  }
	}
  }
  
  // Function to handle sidebar menu item clicks
  function handleMenuItemClick() {
	const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li');
  
	allSideMenu.forEach(li => {
	  const link = li.querySelector('a');
  
	  link.addEventListener('click', function () {
		// Remove "active" class from all li elements
		allSideMenu.forEach(item => {
		  item.classList.remove('active');
		});
  
		// Add "active" class to the parent li element of the clicked link
		li.classList.add('active');
  
		// Store the selected link in localStorage
		setSelectedLink(link.id);
	  });
	});
  }
  
  // Function to toggle the sidebar
  function toggleSidebar() {
	const menuBar = document.querySelector('#content nav .bx.bx-menu');
	const sidebar = document.getElementById('sidebar');
  
	menuBar.addEventListener('click', function () {
	  sidebar.classList.toggle('hide');
	});
  }
  
  // Call the functions to initialize your functionality
  handleMenuItemClick();
  toggleSidebar();
  setActiveLink();
  // Add any additional functionality you need here
  