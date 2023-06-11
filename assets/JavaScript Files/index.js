import { dogs } from "./data.js";
import { DogPosts} from "./dog.js";

let dogsArray = [0, 1, 2]
let post = getNewPost()

document.addEventListener('click', function(e) {
    if(e.target.id === "heart-icon") {
        post.hasBeenLiked = true
    } else if (e.target.id === "cross-icon") {
        post.hasBeenLiked = false
    }   
    if(post.getLikeHtml() === true) {
        post.getLikeHtml()
        setTimeout(() => {
            getNextPost()
        }, 1700)
    }
})

function getNextPost() {
    if(post.getLikeHtml() === true) {
        post = getNewPost()
        render()
    }
}

function getNewPost() {
    const newDogPost = dogs[dogsArray.shift()]
    return newDogPost ? new DogPosts(newDogPost) : {}
}

function render() {
    document.getElementById('main-section').innerHTML = post.getDogHtml()
}

render()