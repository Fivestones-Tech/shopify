
 // === this js code remove the toggle the each container to view the section==== 
const drop = document.querySelectorAll('.section-container');

  drop.forEach(container => {
        container.addEventListener('click', () => {
            container.classList.toggle('active');
        })
  })


  // the section of code rotate the arrow down to arrow up when clicked

const rotateIcon = document.getElementById('rotate');

rotate.addEventListener('click', function() {
 // Toggle the 'rotate180' class to trigger the rotation
 rotateIcon.classList.toggle('rotate180');
});



        // PROGRESS  BAR CODE 
let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 20;
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
}





        // HERE IS THE ANIMATION CHECKED CODE 

        let buttons = document.querySelectorAll('.button-click');
        let click = document.querySelector('.click-me');
        
        
        buttons.forEach(btn => {
            click.addEventListener("mouseover", () => {
                click.classList.add("border");
            });
        
            click.addEventListener("mouseout", () => {
                click.classList.remove("border");
            });
        
        
            btn.addEventListener("click", () => {
                let spinner = btn.querySelector('.fa-rotate');
                let icon = btn.querySelector('.fa-check');
        
                click.classList.toggle("active");
                spinner.style.display = "block";
        
        
                setTimeout(() => {
                    spinner.style.display = "none";
                    icon.classList.toggle("display");
        
                    let increment = document.getElementById("increment");
                    for (let c = 0; c < buttons.length; c++) {
                        buttons[c].addEventListener("click", () => {
                            increment.textContent = c + 1;
                            if (c == 4) {
                                increment.innerHTML = "<i>DONE</i>"
                            }
                        })
                    }
                }, 2000);
            });
        });
        
        





// Add click event listener to the document

const notification = document.querySelector('.alert');
const alertIcon = document.querySelector('.alert-icon');
const userProfile = document.querySelector('.users-profile-hover');
const users = document.querySelector('.username');

if (alertIcon) {
    alertIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        notification.classList.toggle('nav');
        userProfile.classList.remove('nav-close'); // Close user profile dropdown
    });
}

if (users) {
    users.addEventListener('click', function(event) {
        event.stopPropagation();
        userProfile.classList.toggle('nav-close');
        notification.classList.remove('nav'); // Close notification dropdown
    });
}

// Add click event listener to the document
document.addEventListener('click', function() {
    // Close both notification and user profile dropdowns
    notification.classList.remove('nav');
    userProfile.classList.remove('nav-close');
});





    // === this js code remove the dashboard==== 

const dashboard = document.querySelector('.drop-down-container');
const conToggle = document.querySelector('.container-toggle');

if (conToggle) {
    conToggle.addEventListener('click', () => {
        dashboard.classList.toggle('close');
    });
}





