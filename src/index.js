console.log('%c HI', 'color: firebrick')
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedURL = 'https://dog.ceo/api/breeds/list/all'
const tableId = "dog-breeds"

document.addEventListener("DOMContentLoaded", () => {
    showImage()
    showBreeds()
})


function showImage() {
    fetch(imgURL).then(response => response.json()).then(imageArray =>
        imageArray.message.forEach(url => putImageInDom(url))
    )
}

function putImageInDom(url) {
    let image = document.createElement('img')
    image.src = url 
    let ourDiv = document.querySelector("#dog-image-container")
    ourDiv.append(image)
}

function showBreeds() {
    fetch(breedURL).then(response => response.json()).then(breedArray => putBreedsInTable(breedArray) )
}

function putBreedsInTable (breedArray) {
    for (const key in breedArray.message) {
    let listItem = document.createElement('li') 
    listItem.innerText = key
    let list = document.querySelector(`#${tableId}`)
    list.append(listItem)
    }
}