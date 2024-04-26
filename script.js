
document.addEventListener("DOMContentLoaded", function() //Wait for DOM content to load
    {
        var slides = 0;
        var frontVideos = document.getElementsByClassName("frontvideo");
        var sliderButtons = document.querySelectorAll(".sliderImages");

        frontVideoSlide();

        function frontVideoSlide() 
        {
            
            frontVideos[slides].style.display = "block"; // Show current video
            frontVideos[slides].play(); // Start playing current video

            // Highlight the corresponding image
            highlightImage(slides);

            // Wait for the current video to finish playing
            frontVideos[slides].addEventListener('ended', function() {
                frontVideos[slides].style.display = "none"; // Hide current video
                slides++; // Move to the next video
                if (slides >= frontVideos.length) 
                {
                    slides = 0; // Reset slides to loop back to the first video
                }
                setTimeout(frontVideoSlide, 2); 
            });
        }


        // Add click event listeners to the slider navigation images
        sliderButtons.forEach(function(image, index) {
            image.addEventListener('click', function() {
                
                frontVideos[slides].pause(); // Stop the current video
                frontVideos[slides].currentTime = 0; // Set video time to the beginning

                // Hide all videos
                for (var i = 0; i < frontVideos.length; i++) 
                {
                    frontVideos[i].style.display = "none";
                }

                // Show and play the clicked video
                slides = index;
                frontVideos[slides].style.display = "block";
                frontVideos[slides].play();

                // Highlight the clicked image
                highlightImage(slides);
            });
        });

        // Function to highlight the clicked image
        function highlightImage(index) 
        {
            // Reset all images to specified opacity and color
            sliderButtons.forEach(function(image) 
            {
                image.style.opacity = ".5";
                //image.style.backgroundColor = "transparent";
                image.style.border = "none";
            });

            // Highlight the clicked image
            sliderButtons[index].style.opacity = "1"; //Set opacity of clicked image
            sliderButtons[index].style.border = "3px solid #ff1053"; // Set border style for clicked image
        }
    }
);



// Games Page Video Slideshow
document.addEventListener("DOMContentLoaded", function() {
    var myIndex = 0;
    var videos = document.getElementsByClassName("gamesPageVideo");
    carousel();

    function carousel() {
        videos[myIndex].style.display = "block"; // Show current video
        videos[myIndex].play(); // Start playing current video

        // Wait for the current video to finish playing
        videos[myIndex].addEventListener('ended', function() {
            videos[myIndex].style.display = "none"; // Hide current video
            myIndex++; // Move to the next video
            if (myIndex >= videos.length) {
                myIndex = 0; // Reset index to loop back to the first video
            }
            setTimeout(carousel, 2); //small delay
        });
    }
});

// Script for game card videos on games.html page. On mouseover, video starts playing, then resets when the mouse leaves the element
document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementsByClassName("game_card_video");
    
    // Iterate over each video element
    for (var i = 0; i < myVideo.length; i++) {
        // Event listener for mouseover on element
        myVideo[i].addEventListener("mouseover", function() {
            // Play the video when mouseover 
            this.play();
        });
        // Event listener for when mouse leaves the element
        myVideo[i].addEventListener("mouseleave", function()
        {
            // Pause the video and reset it to the beginning
            this.pause();
            this.currentTime = 0;
        });
    
    }
});

//Jobs Page Job Listing Accordion
document.addEventListener("DOMContentLoaded", function() {
var accordion = document.getElementsByClassName("accordion"); /*Get all elements with the class "accordion" Store them in a variable called "accordion"*/
var i;

//iterate through elements in the "accordion" class
for (i = 0; i < accordion.length; i++) 
{
    //Add event listener for when item is clicked
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    /*if panel maxHeight is set, it indicates panel is open so make it null to collapse the panel. If maxHeight is not set, panel is collapsed
    so set maxHeight to the scrollHeight of the panel to open panel*/
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
});

//News Page Accordion
document.addEventListener("DOMContentLoaded", function(){
var news_accordion = document.getElementsByClassName("news_accordion"); /*Get all elements with class "news_Card"*/
var a;

for(a=0 ; a < news_accordion.length; a++)
    {
        news_accordion[a].addEventListener("click", function()
            {
                this.classList.toggle("active");
                var news_panel = this.nextElementSibling;

                if (news_panel.style.maxHeight)
                    {
                        news_panel.style.maxHeight = null;
                        this.style.backgroundColor = "";
                        this.style.width = "";
                        this.style.maxWidth = "";
                    }
                    else
                    {
                        news_panel.style.maxHeight = news_panel.scrollHeight + "px";
                        this.style.backgroundColor = "black";
                        this.style.width = "100%";
                        this.style.maxWidth = "100%";
                    }
            });
    }
});



//Navigation Menu Button
document.addEventListener("DOMContentLoaded", function(){
    
    const menu = document.querySelector(".menu_icon");
    menu.addEventListener("click", myNavMenu);

    function myNavMenu(){
        var navLinks = document.querySelector(".navlinks");
        if (navLinks.style.display === "block")
        {
            navLinks.style.display = "none";
        }
        else
        {
            navLinks.style.display = "block";
        }
    }
});

//Ensure nav links reapper when window is resized to be larger
window.addEventListener("resize", function() {
    var navLinks = document.querySelector(".navlinks");
    
    // Check if window width is greater than 1000px and navLinks display style is none
    if (window.innerWidth > 1000 && navLinks.style.display === "none") {
        navLinks.style.display = ""; // Remove inline style to allow CSS to take precedence
    }
});

