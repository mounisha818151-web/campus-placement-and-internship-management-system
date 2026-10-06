const internshipCategories = document.querySelectorAll(".category");
const internshipCards = document.querySelectorAll(".internship-card");
const internshipSearch = document.getElementById("internshipSearch");
const internshipSearchButton = document.getElementById("searchButton");
if (internshipCategories.length > 0) {
    let selectedInternshipCategory = "all";
    function filterInternships() {
        const searchText = internshipSearch.value.toLowerCase().trim();
        internshipCards.forEach(function(internship) {
            const category = internship.dataset.category;
            const text = internship.textContent.toLowerCase();
            const categoryMatches = selectedInternshipCategory === "all" || category === selectedInternshipCategory;
            const searchMatches = text.includes(searchText);
            if (categoryMatches && searchMatches) {
                internship.style.display = "block";
            } else {
                internship.style.display = "none";
            }
        });
    }
    internshipCategories.forEach(function(button) {
        button.addEventListener("click", function() {
            selectedInternshipCategory = button.dataset.category;
            internshipCategories.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            filterInternships();
        });
    });
    internshipSearchButton.addEventListener("click", function() {
        filterInternships();
    });
}

const placementCategories = document.querySelectorAll(".placement-category");
const placementCards = document.querySelectorAll(".placement-card");
const placementSearch = document.getElementById("placementSearch");
const placementSearchButton = document.getElementById("placementSearchButton");
if (placementCategories.length > 0) {
    let selectedPlacementCategory = "all";
    function filterPlacements() {
        const searchText =  placementSearch.value.toLowerCase().trim();
        placementCards.forEach(function(placement) {
            const category = placement.dataset.category;
            const text = placement.textContent.toLowerCase();
            const categoryMatches = selectedPlacementCategory === "all" || category === selectedPlacementCategory;
            const searchMatches = text.includes(searchText);
            if (categoryMatches && searchMatches) {
                placement.style.display = "block";
            } else {
                placement.style.display = "none";
            }
        });
    }
    placementCategories.forEach(function(button) {
        button.addEventListener("click", function() {
            selectedPlacementCategory = button.dataset.category;
            placementCategories.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            filterPlacements();
        });
    });
    placementSearchButton.addEventListener("click", function() {
        filterPlacements();
    });
}

const companyCategories = document.querySelectorAll(".company-category");
const companyCards = document.querySelectorAll(".company-card");
const companySearch = document.getElementById("companySearch");
const companySearchButton = document.getElementById("companySearchButton");
if (companyCategories.length > 0) {
    let selectedCompanyCategory = "all";
    function filterCompanies() {
        const searchText = companySearch.value.toLowerCase().trim();
        companyCards.forEach(function(company) {
            const category = company.dataset.category;
            const text = company.textContent.toLowerCase();
            const categoryMatches = selectedCompanyCategory === "all" || category === selectedCompanyCategory;
            const searchMatches = text.includes(searchText);
            if (categoryMatches && searchMatches) {
                company.style.display = "block";
            } else {
                company.style.display = "none";
            }
        });
    }
    companyCategories.forEach(function(button) {
        button.addEventListener("click", function() {
            selectedCompanyCategory = button.dataset.category;
            companyCategories.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            filterCompanies();
        });
    });
    companySearchButton.addEventListener("click", function() {
        filterCompanies();
    });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        if (email === "") {
            alert("Please enter your email address.");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (subject === "") {
            alert("Please enter a subject.");
            return;
        }
        if (message === "") {
            alert("Please enter your message.");
            return;
        }
        alert("Message sent successfully!");
        contactForm.reset();
    });
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();
        if (email === "") {
            alert("Please enter your email address.");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password === "") {
            alert("Please enter your password.");
            return;
        }
        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }
        alert("Login successful!");
    });
}