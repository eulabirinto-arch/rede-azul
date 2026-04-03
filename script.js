function addPost() {
    let text = document.getElementById("postText").value;
    let posts = document.getElementById("posts");

    if (text === "") return;

    let newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = "<p>" + text + "</p>";

    posts.prepend(newPost);
    document.getElementById("postText").value = "";
}

function acolhimento() {
    alert("Respire fundo 💙 Você não está sozinha.");
}
