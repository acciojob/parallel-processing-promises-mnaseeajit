// //your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");


// function downloadImage(url){
// 	return new Promise((resolve.reject)=>{
// 		cont img = new Image();
// 		img.onload = () => resolve(img);
//         img.onerror = () => reject(`Error: Failed to load image's URL: ${url}`);
// 		img.src = url;
// 	})
// }

// function displayImage(images){
// 	const outputDiv = document.getElementById('output');

//     images.forEach((image) => {
//         outputDiv.appendChild(image);
//     });
// }

// btn.addEventListener("click", function(){
// 	  const images = [
//   { url: "https://picsum.photos/id/237/200/300" },
//   { url: "https://picsum.photos/id/238/200/300" },
//   { url: "https://picsum.photos/id/239/200/300" },
// ];
// 	 const downloadPromise =  images.map((url)=> downloadImage(url));

//    Promise.all(downloadPromise)
// 	.then((downloadImage)=>{
// 		displayImage(downloadImage);
// 	}).catch((err)=>{
// 		console.log(err);
// 	})
// })

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Error: Failed to load image's URL: ${url}`);
        img.src = url;
    });
}

function displayImages(images) {
    const outputDiv = document.getElementById('output');

    images.forEach((image) => {
        outputDiv.appendChild(image);
    });
}

btn.addEventListener("click", function () {
    const images = [
        { url: "https://picsum.photos/id/237/200/300" },
        { url: "https://picsum.photos/id/238/200/300" },
        { url: "https://picsum.photos/id/239/200/300" },
    ];

    const downloadPromises = images.map((image) => downloadImage(image.url));

    Promise.all(downloadPromises)
        .then((downloadedImages) => {
            displayImages(downloadedImages);
        })
        .catch((err) => {
            console.error(err);
        });
});
