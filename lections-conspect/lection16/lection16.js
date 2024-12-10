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

    this.fields.forEach((field) => {
      const validations = field.dataset.validate.split('|');
      const errorContainer = field.nextElementSibling;
      errorContainer.textContent = '';
      field.classList.remove('error', 'success');

      for (let validation of validations) {
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
          : 'Email incorrect.';
      case 'minLength':
        return value.length >= parseInt(param)
          ? ''
          : `Minimum lenght ${param}.`;
      default:
        return '';
    }
  }
}

new FormValidator('helpForm');
