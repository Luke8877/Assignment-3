// Sample data 
const pollResults = {
    Mona: 4,
    Tenley: 6,
    Maxwell: 7,
};

// Function to update the poll results on the page
function updatePollDisplay() {
    const pollResultsContainer = document.getElementById("pollResults");

    // Clear the existing content
    pollResultsContainer.innerHTML = `
        <p class="poll-results-title">Poll Results</p>
    `;

    // Dynamically generate poll result items
    Object.keys(pollResults).forEach(cat => {
        const div = document.createElement("div");
        div.className = "poll-result-item"; 
        div.innerHTML = `
            <span>${cat}</span>
            <span>${pollResults[cat]}</span>
        `;
        pollResultsContainer.appendChild(div);
    });
}

// Initial display of poll results
updatePollDisplay();

// Add event listener for form submission
document.getElementById("pollForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const favoriteCat = document.getElementById("favoriteCat").value;

    // Update poll results if the favoriteCat exists
    if (pollResults[favoriteCat] !== undefined) {
        pollResults[favoriteCat]++;
    }

    // Update the display
    updatePollDisplay();

    // Show thank you modal
    const message = `Thank you, ${name}, for voting for ${favoriteCat}!`;
    document.getElementById("thankYouModalMessage").textContent = message;

    const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
    thankYouModal.show();
});


