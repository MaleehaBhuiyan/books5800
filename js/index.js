const URL = "http://localhost:3000/books"

document.addEventListener('DOMContentLoaded', () => {
    // Fetching Data

    fetchBooks()
})


function fetchBooks() {
    fetch(URL)
    .then(res => res.json())
    .then(books => renderAllBooks(books))
}

function renderAllBooks( books ) {
    books.forEach( book => renderBook( book ) ) 
}

function renderBook( book ){
    const booksContainer = document.getElementById('books-container')
    
    let div = document.createElement('div')
    div.classList += 'bookCard'
    div.dataset.id = book.id 
    booksContainer.appendChild(div)

    let bookCover = document.createElement('img')
    bookCover.classList += "bookCover1"
    bookCover.src = book.cover_image
    div.appendChild(bookCover)
    
    let title = document.createElement('p')
    title.innerText = book.title
    div.appendChild(title)

    let author = document.createElement('p')
    author.innerText = book.author
    div.appendChild(author)

    let price = document.createElement('p')
    price.innerText = book.price
    div.appendChild(price)

}