const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    //Add an event listener that runs a w=function when the click event is triggered
    star.addEventListener("click", () => {
        
    //loop through the stars modelist again
        stars.forEach((star, index2) => {
    //add the "active" class to the clicked star and any stars with low index
    //remove the active when clicked 
    index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
     });
 });
