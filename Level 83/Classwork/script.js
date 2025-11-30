const username = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

// https://api.github.com/users/user

button.addEventListener("click", () => {
    let githubUser = username.value;

    let promise = fetch(`https://api.github.com/users/${githubUser}`)

    promise
        .then((response) => response.json())
        .then(renderInfo)
        .catch((error) => console.log(error))
})

function renderInfo(userInfo) {
    div.innerHTML = `
        <h1>${userInfo.name}</h1>
        <img src="${userInfo.avatar_url}">
        <p>Bio: ${userInfo.bio}</p>
        <p>Repositories: ${userInfo.public_repos}</p>
        <p>Followers: ${userInfo.followers}</p>
    `
}
