const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// Fetch posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data;
}

// Show posts in DOM
async function showPosts() {
  const posts = await getPosts();
  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;

    postsContainer.appendChild(postEl);
  });
}

// Show loader & fetch more posts
function showLoading() {}

// Show initial posts
showPosts();

window.addEventListener('scroll', () => {
  // console.log(document.documentElement.scrollHeight);
  console.log('scrollTop: ', document.documentElement.scrollTop);
  console.log(document.documentElement.clientHeight);
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // 현재 스크롤 맨 위쪽 값 + 클라이언트가 보고 있는 높이 >= 로딩된 문서의 전체 높이 - 5
  // 즉 맨 밑에 도달했느냐
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
