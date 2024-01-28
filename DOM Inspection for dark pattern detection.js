// Function to identify potential dark patterns
function identifyDarkPatterns() {
    // Check for pop-ups or overlays
    const popups = document.querySelectorAll('.popup, .overlay');
    if (popups.length > 0) {
      console.warn('Possible pop-up or overlay:', popups);
    }
  
    // Check for hidden elements
    const hiddenElements = document.querySelectorAll('[style*="display:none" i], [style*="visibility:hidden" i]');
    if (hiddenElements.length > 0) {
      console.warn('Hidden elements found:', hiddenElements);
    }
  
    // Check for misleading labels or buttons
    const misleadingElements = document.querySelectorAll('[data-deceptive="true"]');
    if (misleadingElements.length > 0) {
      console.warn('Misleading elements found:', misleadingElements);
    }
  
    // Check for forced actions (e.g., pre-selected checkboxes)
    const preSelectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (preSelectedCheckboxes.length > 0) {
      console.warn('Pre-selected checkboxes found:', preSelectedCheckboxes);
    }
  
    // Log a message if no dark patterns are found
    if (
      popups.length === 0 &&
      hiddenElements.length === 0 &&
      misleadingElements.length === 0 &&
      preSelectedCheckboxes.length === 0
    ) {
      console.log('No dark patterns detected.');
    }
  }
  
  // Call the function to identify dark patterns
  identifyDarkPatterns();