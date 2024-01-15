( () => {
	let theme = 'light';

	/**
	 * Function to toggle between themes
	 *
	 * @param {MouseEvent} event
	 */
	const onToggleTheme = ( { currentTarget } ) => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;

		document.documentElement.setAttribute( 'data-theme', newTheme );
		currentTarget.setAttribute( 'aria-pressed', newTheme === 'dark' );
	}; 

	// Get switch button and add click event
	const btn = document.querySelector( `.theme-switch` );
	if ( ! btn ) return;
	btn.addEventListener( 'click', onToggleTheme, false );
  
  
  // DEMO
	const toggle = document.querySelector( `.writing-toggle` );
  if ( ! toggle ) return;
  toggle.addEventListener('click', () => document.body.classList.toggle('vertical'));
} )();

// Peel Function

function peel(targetElementId, selfElementId) {
	const targetElement = document.getElementById(targetElementId);
	const selfElement = document.getElementById(selfElementId);
  
	if (!targetElement) {
	  console.error("Target element with ID " + targetElementId + " not found.");
	  return;
	}
	if (!selfElement) {
	  console.error("Self element with ID " + selfElementId + " not found.");
	  return;
	}
  
	// Peel the target element (toggle its visibility)
	if (targetElement.classList.contains("hidden")) {
	  targetElement.classList.remove("hidden");
	} else {
	  targetElement.classList.add("hidden");
	}
  
	// Hide the self element
	selfElement.classList.add("hidden");
  }