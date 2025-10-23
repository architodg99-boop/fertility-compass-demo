// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Cost Calculator Modal
const modal = document.getElementById('calculatorModal');
const closeBtn = document.querySelector('.close');

function openCalculator() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Dynamic Cost Calculation
const treatmentType = document.getElementById('treatmentType');
const patientType = document.getElementById('patientType');
const estimatedCost = document.getElementById('estimatedCost');

const costRanges = {
    domestic: {
        basic_ivf: '₹2,00,000 - ₹3,00,000',
        icsi: '₹2,50,000 - ₹3,50,000',
        ivf_icsi: '₹3,00,000 - ₹4,50,000',
        egg_donor: '₹4,00,000 - ₹6,00,000'
    },
    international: {
        basic_ivf: '$4,000 - $6,000',
        icsi: '$5,000 - $7,000',
        ivf_icsi: '$6,000 - $9,000',
        egg_donor: '$8,000 - $12,000'
    }
};

function updateCost() {
    const treatment = treatmentType.value;
    const patient = patientType.value;
    estimatedCost.textContent = costRanges[patient][treatment];
}

treatmentType.addEventListener('change', updateCost);
patientType.addEventListener('change', updateCost);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation (for future forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}