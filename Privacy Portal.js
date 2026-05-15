function acceptPrivacyPolicy() {
    var privacyMessage = document.getElementById('privacyMessage');
    
    // Set the text content and styles
    privacyMessage.innerHTML = 'You have accepted our privacy policy.';
    privacyMessage.style.color = '#8B0000'; // Set text color to dark red
    privacyMessage.style.fontWeight = 'bold'; // Set font weight to bold
    privacyMessage.style.fontStyle = 'italic'; // Set font style to italic
    privacyMessage.style.textShadow = '3px 3px 5px rgba(139, 0, 0, 0.5)'; // Add a 3D effect with dark red color
    document.cookie = 'privacyAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'; // Set a cookie to track acceptance
}