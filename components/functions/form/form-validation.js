export function validateForm(form) {
    let isValid = true;
  
    // Remove old error classes
    form.querySelectorAll('.form-error')?.forEach((el) => el.classList.remove('form-error'));
    form.querySelectorAll('.form-input.has-error')?.forEach((el) => el.classList.remove('has-error'));
  
    const fields = form.querySelectorAll('[required]');
  
    fields.forEach((field) => {
      const value = field.value?.trim();
      const wrapper = field.closest('.form-input');
  
      field.removeEventListener('input', handleInputFix);
  
      if (!value) {
        isValid = false;
        field.classList.add('form-error');
        if (wrapper) wrapper.classList.add('has-error');
        field.addEventListener('input', handleInputFix);
      }
    });
  
    return isValid;
  }
  
  function handleInputFix(e) {
    const field = e.target;
    const value = field.value?.trim();
    const wrapper = field.closest('.form-input');
  
    if (value) {
      field.classList.remove('form-error');
      if (wrapper) wrapper.classList.remove('has-error');
      field.removeEventListener('input', handleInputFix);
    }
  }