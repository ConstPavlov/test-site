const header = document.querySelector('header');
console.log(header);

const headerSticki = () => {
  if (window.scrollY >= 50) {
    header.classList.add('header__sticki');
    console.log(window.scrollY);
  } else {
    header.classList.remove('header__sticki');
  }
};

window.addEventListener('scroll', headerSticki);
