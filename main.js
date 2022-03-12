
var categoriesHTML = "";

Array.from(categories).forEach((category) => {
    categoriesHTML += `<button class="category" data-name="${category}">${category}</button>`;
})

if (document.getElementsByClassName("categories-container")) {
    var categoriesContainer = document.getElementsByClassName("categories-container")[0];

    categoriesContainer.innerHTML = categoriesHTML
}

var categoryButton = document.getElementsByClassName("category");

if (categoryButton) {
    Array.from(categoryButton).forEach((cb) => {
        cb.addEventListener('click', function (event) {
            var category = event.target.dataset.name;
            loadImagesByCategory(category);
        })
    })
}

function loadImagesByCategory(category) {
    fetch(`https://api.lorem.space/image/${category}?w=150&h=220`)
        .then(response => response.json())
        .then(data => console.log(data));
}
