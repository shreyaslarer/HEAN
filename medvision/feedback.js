function submitRating() {
    const rating = document.getElementById("rating").value;
    document.getElementById("rating-result").innerText = `Thank you for rating us ${rating} stars!`;
}

function submitFeedback() {
    const feedback = document.getElementById("feedback").value;
    if (feedback) {
        document.getElementById("feedback-result").innerText = "Thank you for your feedback!";
        document.getElementById("feedback").value = ""; // Clear the input after submission
    } else {
        document.getElementById("feedback-result").innerText = "Please provide your feedback before submitting.";
    }
}

function viewFeedback() {
    const feedbackList = [
        "User 1: Great service!",
        "User 2: Very helpful and friendly staff.",
        "User 3: Needs improvement in response time.",
    ];
    const adminFeedbackList = document.getElementById("admin-feedback-list");
    adminFeedbackList.innerHTML = ""; // Clear previous feedback
    feedbackList.forEach(feedback => {
        const feedbackItem = document.createElement("div");
        feedbackItem.textContent = feedback;
        adminFeedbackList.appendChild(feedbackItem);
    });
}
