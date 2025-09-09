// Test script to verify theme toggle functionality
// Run this in the browser console

console.log('=== THEME TOGGLE TEST ===');

// Check if we're in the right environment
if (typeof window === 'undefined') {
  console.error('This script must be run in a browser environment');
} else {
  console.log('✓ Browser environment detected');
  
  // Check for dark class
  const isDark = document.documentElement.classList.contains('dark');
  console.log('Current theme state:', isDark ? 'DARK' : 'LIGHT');
  
  // Find theme toggle button
  const themeButton = document.querySelector('button[aria-label*="theme"], button[aria-label*="Toggle"]');
  if (themeButton) {
    console.log('✓ Theme toggle button found');
    console.log('Button classes:', themeButton.className);
    
    // Simulate click
    console.log('Simulating click...');
    themeButton.click();
    
    // Check result after a short delay
    setTimeout(() => {
      const newIsDark = document.documentElement.classList.contains('dark');
      console.log('New theme state:', newIsDark ? 'DARK' : 'LIGHT');
      console.log('Theme changed?', isDark !== newIsDark ? '✓ YES' : '✗ NO');
    }, 100);
  } else {
    console.error('✗ Theme toggle button not found');
    console.log('Available buttons:', document.querySelectorAll('button'));
  }
}
