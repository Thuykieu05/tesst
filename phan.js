document.addEventListener("DOMContentLoaded", function() {
    fetch("articles.json")
        .then(response => response.json())
        .then(articles => {
            let articlesContainer = document.getElementById("articles");

            articles.forEach(article => {
                let articleElement = document.createElement("div");
                articleElement.classList.add("article");
                articleElement.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" width="100%">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <small>${article.date}</small>
                `;
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.log("Lỗi tải dữ liệu:", error));
});
