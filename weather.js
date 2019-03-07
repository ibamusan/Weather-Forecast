let select = document.querySelector('select');
let display = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select.value;

  if (choice === 'sunny') {
    display.textContent = 'Huuuuhuhuhuh...It is nice and sunny outside today. Wear shorts!.';
  } else if (choice === 'rainy') {
    display.textContent = 'Rain is falling outside; take a rain coat and be careful.';
  } else if (choice === 'snowing') {
    display.textContent = 'The snow is coming down — it is freezing!.';
  } else if (choice === 'overcast') {
    display.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    display.textContent = '';
  }
}