
const toggleMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

const submitForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('https://example.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submission successful!', data);
        alert('Form submitted successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
    });
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', submitForm);

const displayDateTime = () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    });
    document.getElementById('current-time').textContent = dateTimeString;
}

setInterval(displayDateTime, 1000);

const toggleScrollToTop = () => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

const scrollToTopBtn = document.getElementById('scroll-to-top');
scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', toggleScrollToTop);

const fetchRandomQuote = async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Failed to fetch random quote');
        }
        const quoteData = await response.json();
        const quoteText = `${quoteData.content} - ${quoteData.author}`;
        document.getElementById('random-quote').textContent = quoteText;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        document.getElementById('random-quote').textContent = 'Failed to fetch random quote.';
    }
}

fetchRandomQuote();
