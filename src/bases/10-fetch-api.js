const apiKey = "rU3DgmShcTEJoAQWCBXfI7JB7gXUoruD";
const peticion = fetch(
  `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

// peticion
// .then( resp => {
//     resp.json().then(data =>{
//         console.log(data)
//     })
// })
peticion
  .then( (resp) => resp.json())
  .then( ({ data }) => {
    console.log(data.images.original)
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
