const CLIENT_ID = "du76b0325f518bdc69bef6";
const CLIENT_SECRET = "23712e541124454a367405ed2a03658718250556";

async function getUser(name) {
	const resp = await fetch(
		`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
	);
	const profile = await resp.json();

	return profile;
}

document
	.querySelector("#search")
	.addEventListener("submit", async function (e) {
		e.preventDefault();
		const inputValue = document.querySelector("#findByUsername").value;
		const data = await getUser(inputValue);

		userShow(data);
		const repos = await getRepo(data);
		showRepos(repos);
	});

async function getRepo(repos) {
	const repos = await fetch(
		`${data.repos_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
	);
	const repo = await repos.json();
	return repo;
}

showRepos();
function showRepos(repos) {
	for (let repo of repos) console.log(repos);
	const newHtml = `
    <div class="repo">
              <div class="repo_name">
                <a href="#">Swiftmailer-CSS-Inliner</a>
              </div>
              <p>
                <span class="circle"></span> JavaScript
                <ion-icon name="star-outline"></ion-icon> 941
                <ion-icon name="git-branch-outline"></ion-icon> 687
              </p>
            </div>
    `;
}
 
async function userShow(data) {
	document.querySelector(".profile").innerHTML = `
          <img
            src="${data.avatar_url} "/>
          <p class="name">${data.name}</p>
          <p class="username login">${data.login}</p>
          <p class="bio">
          ${data.bio}
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${data.followers} </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${data.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            ${data.company}
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>${data.location}
          </p>
        
    `;
}
