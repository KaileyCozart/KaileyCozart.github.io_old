

        /* Begin Macy */

        let mansonry = new Macy({
            container: '.gallery',
            columns: 1,
            margin: 10,
            mobileFirst: true,
            breakAt: {
                480: {
                columns: 2
                },
                760: {
                columns: 3
                },
                1100: {
                columns: 4
                }
            }
            })
    
            /* Begin Filter Script */
    
            filterSelection("best") // Execute the function and show all columns
            function filterSelection(c) {
            var x, i;
            x = document.getElementsByClassName("getpic");
            if (c == "all") c = "";
            // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
            for (i = 0; i < x.length; i++) {
                w3RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
            }
            }
            // Show filtered elements
            function w3AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
                }
            }
            }
            // Hide elements that are not selected
            function w3RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
            }
            // Add active class to the current button (highlight it)
            var btnContainer = document.getElementById("myBtnContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
            }
    
            /* End Filter Script */
    
            /* Begin Modal Script  <!-- https://stackoverflow.com/questions/41275958/modal-image-galleries-multiple-images --> */
    
            // Get the modal
            var modal = document.getElementById('myModal');
            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = $('.myImg');
            var modalImg = $("#img01");
            var captionText = document.getElementById("caption");
            $('.myImg').click(function(){
                modal.style.display = "block";
                var newSrc = this.src;
                modalImg.attr('src', newSrc);
                captionText.innerHTML = this.alt;
            });
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }
    
            /* End Modal Script */
    
            /* Begin Button Script */
            function button_func(arg) {
                filterSelection(arg);
                mansonry.recalculate(true, true);
            }




/*
    <!--script> FIGURE OUT PURE JS IMPLEMENTATION FOR LESS DEPENDENCIES
    // Get the modal
    var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('.myImg');
var modalImg = document.querySelector("#img01");
var captionText = document.getElementById("caption");
document.querySelector('.myImg').click(function(){
modal.style.display = "block";
var newSrc = this.src;
modalImg.attr('src', newSrc);
captionText.innerHTML = this.alt;
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
</script-->
*/