import axios from 'axios';

export async function getImages(search, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45256893-9d571cd9ec15a1bc54f4c86f4',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return response.data;
}
