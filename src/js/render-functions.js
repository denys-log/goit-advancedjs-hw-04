import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryLightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGallery(images) {
  const galleryItems = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              data-source="${image.largeImageURL}"
              alt="${image.tags}"
            />
            <ul class="gallery-info">
              <li>
                <strong>Likes</strong>
                <span>${image.likes}</span>
              </li>
              <li>
                <strong>Views</strong>
                <span>${image.views}</span>
              </li>
              <li>
                <strong>Comments</strong>
                <span>${image.comments}</span>
              </li>
              <li>
                <strong>Downloads</strong>
                <span>${image.downloads}</span>
              </li>
            </ul>
          </a>
        </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryItems);

  galleryLightbox.refresh();
}
