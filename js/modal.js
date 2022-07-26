(() => {
    const refs = {
      openMenuModalBtn: document.querySelector('[data-menu-open]'),
      closeMenuModalBtn: document.querySelector('[data-menu-close]'),
      openFormModalBtn: document.querySelector('[data-form-open]'),
      closeFormModalBtn: document.querySelector('[data-form-close]'),
      menuModal: document.querySelector('[data-modal-menu]'),
      formModal: document.querySelector('[data-modal-form]')
    };
  
  refs.openMenuModalBtn.addEventListener('click', toggleMenuModal);
  refs.closeMenuModalBtn.addEventListener('click', toggleMenuModal);
  refs.openFormModalBtn.addEventListener('click', toggleFormModal);
  refs.closeFormModalBtn.addEventListener('click', toggleFormModal);
  
  function toggleMenuModal(e) {
    refs.menuModal.classList.toggle('is-hidden');
  }

  function toggleFormModal(e) {
    refs.formModal.classList.toggle('is-hidden');
  }
  })();