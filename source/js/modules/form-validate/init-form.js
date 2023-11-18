export const initForm = () => {
  const submit = document.querySelectorAll('[data-submit]');
  const formBtnSubmit = document.querySelector('[data-form="submit"]');
  const submitName = [];

  const visibleBtn = (evt) => {
    submitName.push(evt.target.name);
    const uniqueName = Array.from(new Set(submitName));
    if (uniqueName.length === submit.length) {
      formBtnSubmit.disabled = '';
    }
  };

  submit.forEach((e) => {
    e.addEventListener('input', visibleBtn);
  });
};
