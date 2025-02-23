
function exploreCourses() {
    window.location.href = "coursespage.html";
}
async function fetchCourses() {
    const response = await fetch("cd.json");
    return response.json();
}
const courses = [
    { title: "Graphic Design", instructor: "Emily Brown", description: "Unleash your creativity with tools like Photoshop and Illustrator." },
    { title: "Artificial Intelligence", instructor: "Anna Davis", description: "Explore AI concepts, algorithms, and real-world applications." },
    { title: "Network Security", instructor: "Sophie Wilson", description: "Learn to secure networks and protect against cyber threats." },
    { title: "DevOps", instructor: "Grace Taylor", description: "Understand continuous integration and continuous delivery practices." }
];
function displayCourses(courseList) {
    const courseContainer = document.getElementById("course-list");
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${course.title}</strong> - <em>${course.instructor}</em><br>${course.description}`;
        courseContainer.appendChild(li);
    });
}
function filterCourses() {
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    let filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery) ||
        course.instructor.toLowerCase().includes(searchQuery)
    );
    displayCourses(filteredCourses);
}
window.onload = () => displayCourses(courses);
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function moveSlide(step) {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
    updateCarousel();
}
function updateCarousel() {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
setInterval(() => moveSlide(1), 3000);
async function fetchCourseDetails(courseTitle) {
    try {
        const response = await fetch("cd.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const course = data.courses.find(c => c.title === courseTitle);
        if (!course) {
            throw new Error("Course not found");
        }

        document.getElementById("course-title").textContent = course.title;
        document.getElementById("course-description").textContent = course.description;

        const prerequisitesContainer = document.getElementById("course-prerequisites");
        prerequisitesContainer.innerHTML = "";
        course.prerequisites.forEach(prerequisite => {
            let li = document.createElement("li");
            li.textContent = prerequisite;
            prerequisitesContainer.appendChild(li);
        });

        const reviewsContainer = document.getElementById("course-reviews");
        reviewsContainer.innerHTML = ""; 
        course.reviews.forEach(review => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${review.name}</strong>: "${review.review}"`;
            reviewsContainer.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching course details:", error);
    }
}
function getCourseTitleFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("course");
}
window.onload = () => {
    const courseTitle = getCourseTitleFromURL();
    fetchCourseDetails(courseTitle);
};
const instructors = [
    { name: "Emily Brown", url: "id.html?instructor=Emily%20Brown" },
    { name: "Anna Davis", url: "id.html?instructor=Anna%20Davis" },
    { name: "Sophie Wilson", url: "id.html?instructor=Sophie%20Wilson" },
    { name: "Grace Taylor", url: "id.html?instructor=Grace%20Taylor" }
];
function displayInstructors(instructorList) {
    const instructorContainer = document.getElementById("instructor-list");
    instructorContainer.innerHTML = "";

    instructorList.forEach(instructor => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = instructor.url;
        a.textContent = instructor.name;
        li.appendChild(a);
        instructorContainer.appendChild(li);
    });
}
if (document.getElementById("instructor-list")) {
    window.onload = () => displayInstructors(instructors);
}
async function fetchInstructorDetails(instructorName) {
    try {
        const response = await fetch("id.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const instructor = data.instructors.find(i => i.name === instructorName);
        if (!instructor) {
            throw new Error("Instructor not found");
        }

        document.getElementById("instructor-name").textContent = instructor.name;
        document.getElementById("instructor-biography").textContent = instructor.biography;

        const coursesContainer = document.getElementById("instructor-courses");
        coursesContainer.innerHTML = "";
        instructor.courses.forEach(course => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="course-details.html?course=${encodeURIComponent(course)}">${course}</a>`;
            coursesContainer.appendChild(li);
        });

        const ratingsContainer = document.getElementById("instructor-ratings");
        ratingsContainer.innerHTML = ""; 
        instructor.ratings.forEach(rating => {
            let li = document.createElement("li");
            li.innerHTML = `Rating: ${rating.rating}/5 - "${rating.review}"`;
            ratingsContainer.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching instructor details:", error);
    }
}

function getInstructorNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("instructor");
}

if (document.getElementById("instructor-name")) {
    window.onload = () => {
        const instructorName = getInstructorNameFromURL();
        if (instructorName) {
            fetchInstructorDetails(instructorName);
        }
    };
}
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }gf 

    return true;
}
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
function handleFormSubmission(event) {
    event.preventDefault(); 

    if (!validateForm()) {
        return;
    }
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        course: document.getElementById("course").value
    };
    console.log("Form Data Submitted:", formData);
    alert("Enrollment successful!");
    document.getElementById("enrollment-form").reset();
}
document.getElementById("enrollment-form").addEventListener("submit", handleFormSubmission);
