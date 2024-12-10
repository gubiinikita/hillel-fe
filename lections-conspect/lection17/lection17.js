class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.fields = this.form.querySelectorAll('[data-validate]');
    this.initialize();
  }

  initialize() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const isValid = this.validateForm();

      if (isValid) {
        const formData = new FormData(this.form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        console.log('Form Data:', data);
        console.log('Form Attributes:', {
          method: this.form.method,
          action: this.form.action,
        });
        alert('Form sent successfully');
      }
    });
  }

  validateForm() {
    let isValid = true;

    Array.prototype.forEach.call(this.fields, (field) => {
      const validations = field.dataset.validate.split('|');
      const errorContainer = field.nextElementSibling;
      errorContainer.textContent = '';
      field.classList.remove('error', 'success');

      for (let i = 0; i < validations.length; i++) {
        const validation = validations[i];
        const [rule, param] = validation.split(':');
        const error = this.validateField(field, rule, param);

        if (error) {
          errorContainer.textContent = error;
          field.classList.add('error');
          isValid = false;
          break;
        }
      }

      if (!errorContainer.textContent) {
        field.classList.add('success');
      }
    });

    return isValid;
  }

  validateField(field, rule, param) {
    const value = field.value.trim();

    switch (rule) {
      case 'required':
        return value ? '' : 'This field is mandatory';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email format.';
      case 'minLength':
        return value.length >= parseInt(param, 10)
          ? ''
          : `Minimum length is ${param} characters.`;
      default:
        return '';
    }
  }
}

new FormValidator('helpForm');
