const projectItems = document.querySelectorAll('.project-item');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');
const pageNumberElement = document.querySelector('.page-number');
const paginationBar = document.querySelector('.pagination-bar');


let currentIndex = 0;

function updateProjectDisplay() {
  projectItems.forEach((item, index) => {
    item.classList.remove('prev', 'current', 'next');
    if (index < currentIndex) {
      item.classList.add('prev');
    } else if (index === currentIndex) {
      item.classList.add('current');
    } else {
      item.classList.add('next');
    }
  });
  pageNumberElement.textContent = `${currentIndex + 1}/${projectItems.length}`;
  paginationBar.style.width = `${((currentIndex + 1) / projectItems.length) * 100}%`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
  updateProjectDisplay();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % projectItems.length;
  updateProjectDisplay();
});

updateProjectDisplay();