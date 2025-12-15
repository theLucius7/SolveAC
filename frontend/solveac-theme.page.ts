const style = document.createElement('style');
style.innerHTML = `
  .section {
    border-radius: 8px !important;
  }

  .section__table-header {
    border-radius: 8px 8px 0 0;
  }

  .search > input {
    border-top-left-radius: 8px;
  }

  .search > button {
    border-top-right-radius: 12px;
  }

  .theme--dark .section__table-header {
    background-color: rgba(50, 51, 52, 0.949);
  }

  .theme--dark .section__table-header.is-stuck {
    box-shadow: 0 0.1875rem 0.125rem rgba(255, 255, 255, 0.03);
  }

  .nav .nav__item.nav--active {
    border-color: #ed5f82;
    background: #fadbdf;
  }

  .theme--dark .nav .nav__item.nav--active {
    border-color: #ed5f82;
    background: #ed5f824c;
  }

  .nav .nav__item:hover {
    border-color: #5f9fd6;
    background: #dae3f5;
  }

  a.menu__link:not(.disabled):hover,
  button.menu__link:not(.disabled):hover {
    background: #dae3f5;
  }
`;

document.head.appendChild(style);
