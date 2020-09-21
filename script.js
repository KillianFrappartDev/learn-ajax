// DOM Elements
const img = document.querySelector('img');
const char = document.querySelector('h1');
const text = document.querySelector('p');
const button = document.querySelector('button');

console.log(text);
console.log(char);
console.log(img);

// Button event
button.addEventListener('click', async () => {
  const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');

  const { quote, character, image } = response.data[0];

  img.src = image;
  char.innerHTML = character;
  text.innerHTML = quote;
});
