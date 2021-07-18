(function () {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalElements: document
      .querySelector("[data-modal]")
      .querySelectorAll(
        "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      ),
    modalTitle: document.querySelector("[data-modal-title]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden"),
      refs.htmlAndBody[0].classList.toggle("no-scroll"),
      refs.htmlAndBody[1].classList.toggle("no-scroll");
  }

  refs.openModalBtn.addEventListener("click", function () {
    refs.modal.classList.contains("is-hidden") &&
      (toggleModal(),
      /* Чарівництво */
      setTimeout(() => {
        refs.modal.focus();
        var isFocused = document.activeElement === refs.modal;
        console.log(`modal isFocused: ${isFocused}`);
      }, 250));
  }),
    refs.closeModalBtn.addEventListener("click", event => {
      toggleModal(),
        setTimeout(() => {
          refs.openModalBtn.focus();
        }, 250);
    }),
    refs.modal.addEventListener("keyup", event => {
      (event.which === 27 || event.key === "Escape") &&
        !refs.modal.classList.contains("is-hidden") &&
        (toggleModal(),
        setTimeout(() => {
          refs.openModalBtn.focus();
        }, 250));
    }),
    refs.modal.addEventListener("click", event => {
      event.target.matches("[data-modal]") &&
        (toggleModal(),
        setTimeout(() => {
          refs.openModalBtn.focus();
        }, 250));
    });
})();
