// Toggle Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
});

// Create modal elements dynamically
const modal = document.createElement("div");
modal.id = "imageModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.inset = "0";
modal.style.background = "rgba(0,0,0,0.9)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "9999";

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";
modalImg.style.borderRadius = "10px";

modal.appendChild(modalImg);
document.body.appendChild(modal);

// Open image fullscreen
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
    });
});

// Close when clicking background
modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close with ESC key
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

// Toggle Songs Accordion
function toggleSongs(button) {
    const songList = button.nextElementSibling;
    const isVisible = songList.style.display === 'block';

    if (isVisible) {
        songList.style.display = 'none';
        button.textContent = 'Show Songs';
        button.classList.remove('active');
    } else {
        songList.style.display = 'block';
        button.textContent = 'Hide Songs';
        button.classList.add('active');
    }
}

// Toggle Journey Accordion (Simple toggle - allows multiple open)
function toggleJourney(element) {
    element.classList.toggle("active");
}

function filterProjects(type) {
    const projects = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button

    if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }

    // Filter projects
    projects.forEach(project => {
        if (type === 'all') {
            project.classList.add('show');
        } else {
            const projectType = project.getAttribute('data-type');
            if (projectType === type) {
                project.classList.add('show');
            } else {
                project.classList.remove('show');
            }
        }
    });
}

const img = document.getElementById('profileImg');
const placeholder = document.getElementById('placeholder');

if (img && placeholder) {
    img.onload = function () {
        img.style.display = 'block';
        placeholder.style.display = 'none';
    };
}
// Make project items clickable
// Make project items clickable (Event Delegation)
document.addEventListener('click', function (e) {
    const item = e.target.closest('.project-item[data-link]');
    if (item) {
        const link = item.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    }
});