function addPost() {
    let text = document.getElementById("postText").value;
    let posts = document.getElementById("posts");

    if (text.trim() === "") return;

    let newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
        <p>${text}</p>
        <button onclick="likePost(this)">❤️ Curtir</button>
    `;

    posts.prepend(newPost);
    document.getElementById("postText").value = "";
}

function likePost(button) {
    button.innerText = "❤️ Curtido";
}
