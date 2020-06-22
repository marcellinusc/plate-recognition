function readURL(input) {
    if (input.files && input.files[0]) {
        
        var reader = new FileReader();
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        reader.onload = function(e) {
            
            var img = new Image();
            img.onload = function() {
                this.alt = "Your image here..."
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            img.src = e.target.result

            // $("#prev-img")
            //     .attr("src", e.target.result)
            //     .width(150)
            //     .height(200);

        };

        reader.readAsDataURL(input.files[0]);

    }
}