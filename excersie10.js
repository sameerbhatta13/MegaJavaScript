// URL of the API endpoint
let url = "https://api.oceandrivers.com/static/resources.json";

// Fetch data from the URL
fetch(url)
    .then(response => {
        // Convert the response to JSON
        return response.json();
    })
    .then(contest => {
        // Now 'contest' contains the JSON data from the API
        console.log(contest); // Log the data to check its structure and contents

        let ihtml = "";
        // Iterate over each item in the 'contest' array
        for (let item in contest) {
            console.log(contest[item]); // Log each item to verify its properties

            // Check if the item has 'title' and 'contact' properties
            if (contest[item] && contest[item].title && contest[item].contact) {
                // Create a card for each item with valid 'title' and 'contact'
                ihtml += `
                    <div class="card" style="width: 18rem;align-items: center;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${contest[item].title}</h5>
                            <h5 class="card-title">${contest[item].contact}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit us</a>
                        </div>
                    </div>`;
            } else {
                // Warn if an item is missing 'title' or 'contact'
                console.warn('Item is missing title or contact:', contest[item]);
            }
        }
        // Insert the generated HTML into the DOM
        cardContainer.innerHTML = ihtml;
    })
    .catch(error => {
        // Handle any errors that occur during the fetch or JSON conversion
        console.error('Error fetching data:', error);
    });
