document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("header ul");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("open");
    });
});






// this is being used for the default image just to find wre the other 42 images need to be put

// brake for nwt section

document.addEventListener("DOMContentLoaded", function() {
    const adjustImageScaling = () => {
        const images = document.querySelectorAll('.parallax-container img');
        images.forEach(img => {
            if (window.innerHeight / window.innerWidth > img.naturalHeight / img.naturalWidth) {
                img.style.width = 'auto';
                img.style.height = '100%';
            } else {
                img.style.width = '100%';
                img.style.height = 'auto';
            }
        });
    };

    adjustImageScaling();
    window.addEventListener('resize', adjustImageScaling);
});

document.addEventListener("DOMContentLoaded", function() {
    const adjustImageScaling = () => {
        const images = document.querySelectorAll('.parallax-container img');
        images.forEach(img => {
            if (window.innerHeight / window.innerWidth > img.naturalHeight / img.naturalWidth) {
                img.style.width = 'auto';
                img.style.height = '100%';
            } else {
                img.style.width = '100%';
                img.style.height = 'auto';
            }
        });
    };

    adjustImageScaling();
    window.addEventListener('resize', adjustImageScaling);
});



// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    function scaleImage() {
        const image = document.querySelector('.Parallax_Bg_mountan_fix');
        if (image) {
            image.style.transform = 'translate(-50%, -50%) scale(1.2)'; // Scale the image up by 220%
            image.style.transformOrigin = 'center'; // Ensures the scaling expands from the center
        }
    }

    scaleImage(); // Call the function to scale the image
});

// ----------------------------------------------------

// the code bellow is used to scale up the entire cavas of main section since by defult it wont fit for some reason

document.addEventListener("DOMContentLoaded", function() {
    const mainImages = document.querySelectorAll('main .parallax-container img'); // this Selects only images inside the <main> element

    function scaleMainImages() {
        mainImages.forEach(img => {
            img.style.transform = 'translate(-50%, -50%) scale(1.02)'; // Slightly scale up each image
            img.style.transformOrigin = 'center'; // (do not touch) Ensures the scaling expands from the center
        });
    }

    scaleMainImages(); // Call the function to scale the images
    window.addEventListener('resize', scaleMainImages); // Ensure scaling persists on window resize
    window.addEventListener('scroll', scaleMainImages); // Optional: Adjust scale during scroll if needed
});

// ----------------------------------------------------


// actual parallax for <main> in homepage 
document.addEventListener("DOMContentLoaded", function() {
    const parallaxElements = document.querySelectorAll(".parallax");

    window.addEventListener('mousemove', (e) => {
        // Calculate the center of the window
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Get the mouse position difference from the center
        const deltaX = (e.clientX - centerX) / centerX; // normalized -1 to 1
        const deltaY = (e.clientY - centerY) / centerY; // normalized -1 to 1

        // Apply a subtle movement to parallax elements
        parallaxElements.forEach(el => {
            const intensity = 20; // Adjust this value for more/less movement
            const translateX = intensity * deltaX;
            const translateY = intensity * deltaY;

            // Apply transformation with correct template literal syntax
            el.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
});