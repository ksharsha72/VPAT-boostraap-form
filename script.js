document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('projectForm');
    const codeReviewPass = document.getElementById('codeReviewPass');
    const codeReviewComments = document.getElementById('codeReviewComments');
    const totalTests = document.getElementById('totalTests');
    const testsExecuted = document.getElementById('testsExecuted');

    // Show/hide code review comments based on radio selection
    document.querySelectorAll('input[name="codeReview"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'pass') {
                codeReviewComments.classList.remove('d-none');
            } else {
                codeReviewComments.classList.add('d-none');
            }
        });
    });

    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate test numbers
        const totalTestsValue = parseInt(totalTests.value);
        const testsExecutedValue = parseInt(testsExecuted.value);
        
        if (testsExecutedValue > totalTestsValue) {
            alert('Total tests executed cannot be greater than total number of tests');
            return;
        }

        // Add your form submission logic here
        console.log('Form submitted successfully');
    });
}); 