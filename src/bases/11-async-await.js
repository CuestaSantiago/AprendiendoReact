// const getImagenPromesa = ()=>{
//      return new Promise( (resolve, reject) =>{
//         resolve('http://asdjdsajdjjd.com')
//     })
// }

// getImagenPromesa()
//  .then(console.log)

const getImage = async () => {
    try {
        const apiKey = "rU3DgmShcTEJoAQWCBXfI7JB7gXUoruD";
        const resp = await fetch(
          `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.warn('manejo del error', error)
    }
 
};

getImage().then();
