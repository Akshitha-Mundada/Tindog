
class DogPosts {
    constructor(data) {
        Object.assign ( this, data )
    }

    getDogHtml () {
        const {avatar, name, age, bio,} = this
        let getHtml = `
                <div class="profile-section">
                    <img class="dog-img" src="${avatar}" alt="dog image">
                    <h4 class="dog-name">${name},</h4>
                    <h4 class="dog-age">${age}</h4>
                    <p class="bio">${bio}</p>
                </div>
                <div class="feedback-section" id="feedback-section">
                    <div class="cross-icon" id="cross-icon" data-reject = "cross-icon">
                        <img src="assets/images/icon-cross.png" id="cross-icon" alt="reject-icon">
                    </div>
                    <div class="heart-icon" id="heart-icon" data-like = "heart-icon">
                        <img src="assets/images/icon-heart.png" id="heart-icon" alt="heart-icon">
                    </div>
                </div>
            `
        return getHtml
    }

    getLikeHtml() {
        let likeHtml = ``
        let swipeStatus = ``
        if (this.hasBeenLiked === true) {
            likeHtml = `
                <div id="feedback-result">
                    <img class="like-badge" src="assets/Images/badge-like.png" alt="like badge">
                </div>
            `
        } else if(this.hasBeenLiked === false) {
            likeHtml = `
                <div id="feedback-result">
                    <img class="reject-badge" src="assets/Images/badge-nope.png" alt="reject badge">
                </div>
            `
        }
        document.getElementById('main-section').innerHTML += likeHtml
        return swipeStatus = true
    }

    getSwipe() {
        let condition =  this.getLikeHtml()
        if (condition) {
            this.hasBeenSwiped = true
        } else {
            this.hasBeenSwiped = false
        }
        return this.hasBeenSwiped
    }
}

export {DogPosts}