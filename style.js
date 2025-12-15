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

function toggleJourney(element) {
    element.classList.toggle("active");
}

function filterProjects(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    projects.forEach(project => {
        if (type === 'all') {
            project.classList.add('show');
        } else if (project.classList.contains(type)) {
            project.classList.add('show');
        } else {
            project.classList.remove('show');
        }
    });
}

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

        function toggleJourney(element) {
            const wasActive = element.classList.contains('active');

            // Close all journey items
            document.querySelectorAll('.journey-item').forEach(item => {
                item.classList.remove('active');
            });

            // If it wasn't active before, open it
            if (!wasActive) {
                element.classList.add('active');
            }
        }

        function filterProjects(type) {
            const projects = document.querySelectorAll('.project-item');
            const buttons = document.querySelectorAll('.filter-btn');

            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
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

        const img = document.getElementById('profileImg');
        const placeholder = document.getElementById('placeholder');

        img.onload = function () {
            img.style.display = 'block';
            placeholder.style.display = 'none';
        };
