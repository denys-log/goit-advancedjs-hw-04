import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery } from './js/render-functions';
import { getImages } from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const button = document.querySelector('.form-btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.getElementById('load-more-button');

let prevSearchValue = '';
let page = 1;
const limit = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const search = formData.get('search').trim();

  if (search.length > 0 && search !== prevSearchValue) {
    gallery.innerHTML = '';
    loader.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');
    input.disabled = true;
    button.disabled = true;

    prevSearchValue = search;
    page = 1;

    try {
      const posts = await getImages(search, page);
      if (posts.total === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      } else {
        renderGallery(posts.hits);
        if (posts.hits.length === limit) {
          loadMoreBtn.classList.remove('hidden');
        }
      }
    } catch (error) {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    }

    loader.classList.add('hidden');
    input.disabled = false;
    button.disabled = false;
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');
  input.disabled = true;
  button.disabled = true;
  let isNotMorePosts = false;

  try {
    const posts = await getImages(prevSearchValue, page + 1);
    const totalPages = Math.ceil(posts.totalHits / limit);
    page = page + 1;

    if (posts.hits.length < limit || totalPages <= page) {
      isNotMorePosts = true;

      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }

    if (posts.hits.length) {
      renderGallery(posts.hits);

      window.scrollBy({
        top:
          document.querySelector('.gallery-link').getBoundingClientRect()
            .height * 2,
        left: 0,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  }

  if (!isNotMorePosts) {
    loadMoreBtn.classList.remove('hidden');
  }
  loader.classList.add('hidden');
  input.disabled = false;
  button.disabled = false;
});
