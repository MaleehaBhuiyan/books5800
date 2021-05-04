const URL = "http://localhost:3000/books"

document.addEventListener('DOMContentLoaded', () => {
    // Fetching Data

    fetchBooks()
})


function fetchBooks() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
}