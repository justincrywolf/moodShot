// click handler for submitting image
// $( "#submit" ).on( "click", function(){
//     var faceURL = $(this).val


// moving image file to some form that can pass into query


// global variables for face++

//////////////////////////// var faceImage = user uploaded image
var faceImage = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13625394_10154011762247869_1447612658950188866_n.jpg?_nc_cat=0%26oh=9af591b71b9810b065670cc7da47f56a%26oe=5B6BA40E";


var faceQuery = "https://cors-anywhere.herokuapp.com/https://api-us.faceplusplus.com/facepp/v3/detect?api_key=s0vdP0fNEcYFymfT0sw0pt-pGCOp37-y&api_secret=7Ri6sHu3XL0WdXmylro7Rvz_v8JJKV_M&image_url=" + faceImage + "&return_attributes=emotion";

// face++ ajax request
var emotions;

$.ajax({
    url: faceQuery,
    method: "POST"
}).then(function (response) {
    var emotions = response.faces[0].attributes.emotion;
    console.log('emotions; ',emotions);
    function sortProperties(obj) {
        // convert object into array
        var sortable = [];
        for (var key in obj)
            if (obj.hasOwnProperty(key))
                sortable.push([key, obj[key]]); // each item is an array in format [key, value]

        // sort items by value
        sortable.sort(function (a, b) {
            return a[1] - b[1]; // compare numbers
        });
        return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
    }

    var sortedEmotions = sortProperties(emotions);
    console.log(sortedEmotions.reverse());
});


// global variables for cocktailDB


// cocktailDB ajax request

    ///////class/id//////////////////////////

    // <img id="drinkImg" />
    // <div class="drink-name"></div>
    // <div class="drink"></div>
    // <div class="drink-instructions"></div>

    /////////////////////////////////////////
    

    
 
        var randomDrinkIndex;
        var queryRandomDrink;
        var queryIngredient;
        var drinkElement = $(".drink");
        var imgElement = $("#drinkImg");
       


        /////////////////////// This is where cocktaildb kicks in.

        queryIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + 'Rum';//"Vodka" will be a var input recieved from face++"
        function selectDrink() {
            $.ajax({
                url: queryIngredient,
                method: 'GET',
                //////////////produce random number between one and index length.
            }).then(function (response) {
                randomDrinkIndex = (Math.floor((Math.random() * [response.drinks.length]) + 1));
                //successfully returns link to full drink info page.
                queryRandomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + response.drinks[randomDrinkIndex].idDrink;

                $.ajax({
                    url: queryRandomDrink,
                    method: 'GET',
                }).then(function (response) {

                     var drinkInstructions = response.drinks[0].strInstructions;
                    var drinkName = response.drinks[0].strDrink;
                    var drink = response.drinks[0];
                    var i = 1;
                    while(drink["strIngredient" + i]){
                        drinkElement.append("<div>" + drink["strMeasure" + i] + " - " + drink["strIngredient" + i] + "</div>");
                        i++;
                        
                        
                        
                    };
                    $(".drink-name").append(drinkName);
                    $(".drink-instructions").append(drinkInstructions);
                    imgElement.prop("src", drink.strDrinkThumb);
                   

                  
                });
            });




        }
                 

        selectDrink();

// });
