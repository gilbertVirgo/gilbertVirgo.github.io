import jobs from "./jobs.js";

const root = document.querySelector("main");

jobs.forEach(({ title, url, description, images }) => {
	root.innerHTML += `
    <article>
        <h3>${title}</h3>
        ${
			url
				? `<p><a target="_blank" href="${url}" title="Visit ${title}">${url.replace(
						"https://",
						""
				  )}</a></p>`
				: ""
		}
        <p>${description}</p>
        <div class="image-grid">
            ${images
				.map(
					(url) =>
						`<div class="image" style="background-image: url(${url})"></div>`
				)
				.join("")}
        </div>
    </article>
    `;
});
