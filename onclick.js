// on click functions for the entire page.

// one on click --> for the submit button --> submit button id = link-submit 
    // on click
        // should enter the image url into the facial recognition software
            // that ajax request should return mood data
            // evaluates the mood data to find the highest valued mood.
            // takes the highest valued mood and puts it into the function for the ajax request for the cocktail database
                // returns cocktail data dependant on mood
                // prints the cocktail data to the html
$("#link-submit").on("click", function() {
    // run ajax request for mood
    // take mood data
    // run ajax request for cocktail recipe
    // calls printContent function

})

function printMessage() {
    // takes the mood data from the ajax request.
    // finds the value in a string form
    // finds the correct switch case.
}

function printContent() {
    // prints the cocktail recipe to the dom
}

// separate function
    // function to print the message to the content page.
        // takes the mood data.
        // depending on the mood its going to generate one of the messages.
            // prints the message heading and the message to the correct div ids.


// the ajax requests should both be inside the onclick function and then also have their own functions?
