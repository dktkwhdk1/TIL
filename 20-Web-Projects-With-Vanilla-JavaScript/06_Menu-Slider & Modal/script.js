const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Show modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// Hide modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// Hide modal on outside click
// 모달 컨테이너를 클릭하면 show-modal 클래스 삭제
window.addEventListener('click', e =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
