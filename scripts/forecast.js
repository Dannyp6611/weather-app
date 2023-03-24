const KEY = 'ODd7w819augbgLxVRUK42iw9Tu2FNIga';

const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${KEY}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity('manchester')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
