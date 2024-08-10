export function getImages(search) {
  const searchParams = new URLSearchParams({
    key: '45256893-9d571cd9ec15a1bc54f4c86f4',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return new Promise((resolve, reject) => {
    fetch(`https://pixabay.com/api/?${searchParams}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}
