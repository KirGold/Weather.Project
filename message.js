let boxMessage = document.querySelector(".message")
let commentArea = document.querySelector(".comment-area")
let btnSend = document.querySelector(".comment-send")
let spinner = document.querySelector(".spinner")
let nicknameInput = document.querySelector(".nickname-input")
let otherCommentsContainer = document.querySelector(".other-comments-container")

window.addEventListener("load", function () {
    let storedNickname = localStorage.getItem("nickname")
    let storedMessage = localStorage.getItem("message")

    if (storedMessage && storedNickname) {
        boxMessage.classList.add("visible")
        let newMessage = document.createElement("div")
        newMessage.innerHTML = `<h3>${storedNickname}</h3><p>${storedMessage}</p>`
        newMessage.classList.add("user-comment")
        boxMessage.appendChild(newMessage)
    } else {
        boxMessage.classList.remove("visible")
    }
});

btnSend.addEventListener("click", function () {
    let nicknameValue = nicknameInput.value.trim()
    let commentAreaValue = commentArea.value.trim()

    if (!commentAreaValue) {
        boxMessage.innerHTML = ""
        boxMessage.classList.remove("visible")
        spinner.style.display = "none"
        alert("Please enter a comment!")
        return;
    }

    if (!nicknameValue) {
        alert("Please enter your nickname!")
        return;
    }

    localStorage.setItem("nickname", nicknameValue)
    localStorage.setItem("message", commentAreaValue)

    boxMessage.innerHTML = ""
    boxMessage.classList.remove("visible")
    spinner.style.display = "block"

    setTimeout(function () {
        let storedNickname = localStorage.getItem("nickname")
        let storedMessage = localStorage.getItem("message")

        spinner.style.display = "none"

        let newMessage = document.createElement("div")
        newMessage.classList.add("user-comment")
        newMessage.innerHTML = `<h3>${storedNickname}</h3><p>${storedMessage}</p>`
        boxMessage.appendChild(newMessage)
        boxMessage.classList.add("visible")
    }, 2000);
});

let arrayComment = [
    { nickname: "Alice", message: "Today is a pretty day!" },
    { nickname: "Bob", message: "Nice site." },
    { nickname: "Charlie", message: "Alright" },
    { nickname: "Dave", message: "Good" },
    { nickname: "Eve", message: "I love rain." }
];

function addDynamicComments() {
    arrayComment.forEach((addCom, index) => {
        let randomDelay = Math.random() * (8 - 4) + 2
        setTimeout(() => {
            let otherComment = document.createElement("div");
            otherComment.classList.add("other-comment")
            otherComment.innerHTML = `<h3>${addCom.nickname}</h3><p>${addCom.message}</p>`
            otherCommentsContainer.appendChild(otherComment)
        }, index * randomDelay * 1000)
    });
}

addDynamicComments()
