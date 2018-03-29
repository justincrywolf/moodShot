// click handler for submitting image


    // global variables for face++

    var faceImage = $(this).val;
    var faceQuery = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=s0vdP0fNEcYFymfT0sw0pt-pGCOp37-y&api_secret=7Ri6sHu3XL0WdXmylro7Rvz_v8JJKV_M&image_file=" + faceImage + "&return_attributes=emotion";

        // face++ ajax request
        
        $.ajax({
        url: faceQuery,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });

    // global variables for cocktailDB


        // cocktailDB ajax request

