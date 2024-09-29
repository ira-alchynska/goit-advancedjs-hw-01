const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
        console.log('Populated form with saved data:', formData);
    }
}


function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log('Saved form data to localStorage:', formData);
}


form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill out all fields');
        return;
    }

    console.log('Form Data Submitted:', formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
});


populateForm();
