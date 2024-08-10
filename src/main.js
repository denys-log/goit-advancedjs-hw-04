import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery } from './js/render-functions';
import { getImages } from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const button = document.querySelector('.form-btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrapper');

let prevSearchValue = '';

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const search = formData.get('search').trim();

  if (search.length > 0 && search !== prevSearchValue) {
    gallery.innerHTML = '';
    loader.classList.remove('hidden');
    input.disabled = true;
    button.disabled = true;

    prevSearchValue = search;

    getImages(search)
      .then(posts => {
        if (posts.total === 0) {
          iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
          });
        } else {
          renderGallery(posts.hits);
        }
      })
      .catch(error => {
        iziToast.error({
          message: error.message,
          position: 'topRight',
        });
      })
      .finally(() => {
        loader.classList.add('hidden');
        input.disabled = false;
        button.disabled = false;
      });
  }
});
