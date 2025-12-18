// Backward compatibility for cached HTML
window.toggleMenu = function () {
    // Intentionally empty: The Event Listener handles the toggle.
    // This function exists to prevent "toggleMenu is not defined" errors on cached pages.
};

// Toggle Hamburger Menu (Event Listener approach)
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        // Ensure no inline onclick interferes
        burger.removeAttribute('onclick');

        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-active')) {
                if (!nav.contains(e.target) && !burger.contains(e.target)) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
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
    img.addEventListener("click", (e) => {
        // Don't open modal for profile images or if clicking on a link
        if (img.closest('a') || img.closest('.profile-circle')) {
            return;
        }
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

// Fixed filter function
function filterProjects(type) {
    const projects = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button - remove active from all first
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active to clicked button
    event.target.classList.add('active');

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

// Profile image handler
const img = document.getElementById('profileImg');
const placeholder = document.getElementById('placeholder');

if (img && placeholder) {
    img.onload = function () {
        img.style.display = 'block';
        placeholder.style.display = 'none';
    };
}

// Make project items clickable (Event Delegation)
document.addEventListener('click', function (e) {
    // Don't trigger if clicking filter buttons
    if (e.target.classList.contains('filter-btn')) {
        return;
    }

    const item = e.target.closest('.project-item[data-link]');
    if (item) {
        const link = item.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    }
});