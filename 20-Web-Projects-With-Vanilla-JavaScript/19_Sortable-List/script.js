const draggable_list = document.getElementById('draggable-list'); // ul
const check = document.getElementById('check'); // button

const richestPeople = [
  '제프 베조스 (Jeff Bezos)',
  '빌 게이츠 (Bill Gates)',
  '워렌 버핏 (Warren Buffett)',
  '베르나르 아르노 (Bernard Arnault)',
  '카를로스 슬림 엘루 (Calos Slim Helu)',
  '아만시오 오르테가 (Amancio Ortega)',
  '래리 엘리슨 (Larry Ellison)',
  '마크 저커버그 (Mark Zuckerberg)',
  '마이클 블룸버그 (Michael Bloomberg)',
  '래리 페이지 (Larry Page)',
];

// Store list-items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() })) // sort라는 key에 랜덤한 수를 줘서 순서가 계속 바뀌게 하는거임
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  // this는 draggable 클래스의 div 태그이다.
  // closest로 li 태그인 가장 가까운 부모를 가져오고 getAttribute로 해당 속성도 가져온다.
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault(); // 이걸 안하면 drop 했을 때 dragDrop 함수 실행안됨
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  // listItems에 들어있는 li 태그를 가져와서 그 li 태그 안에 있는 draggable을 쿼리셀렉터로 가져옴
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();
    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong'); // 한번 더 누를수도 있게
      listItem.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);
