const URL = "http://localhost:3000/books"

document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search')
    const booksContainer = document.getElementById('books-container')
    const showPageContainer = document.getElementById('show-page-container-top')

    let searchTerm = ''; 
    let books;

    // JS FOR SEARCH FORM ON BOOK LISTING PAGE 

    const fetchBooks = async () => {
        books = await fetch(URL).then(res => res.json())
    }

    const showBooks = async () => {
        booksContainer.innerHTML = '';

        await fetchBooks()

        // Book Listing JS 
        const ul = document.createElement('ul')
        ul.classList.add('books')

        books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .forEach(book => {
            let div = document.createElement('div')
            div.classList += 'bookCard'
            div.dataset.id = book.id 
            booksContainer.appendChild(div)

            let link = document.createElement('a')
            link.href = `../bookDetails/${book.id}.html`
            div.appendChild(link)
            
            let bookCover = document.createElement('img')
            bookCover.classList += "bookCover1"
            bookCover.src = book.cover_image
            link.appendChild(bookCover)

            let addToCart = document.createElement('button')
            addToCart.classList += 'addToCart'
            addToCart.innerHTML = "Add to cart"
            link.appendChild(addToCart)
            
            let title = document.createElement('p')
            title.innerText = book.title
            link.appendChild(title)

            let author = document.createElement('p')
            author.innerText = `By: ${book.author}`
            link.appendChild(author)

            let price = document.createElement('p')
            price.innerText = `$${book.price}`
            link.appendChild(price)

            
            
        })

        
    }
    
    showBooks()
    
    searchInput.addEventListener('input', e => {
        searchTerm = e.target.value;
        showBooks();
    });

    
})




// REFERENCE FOR SEARCH FUNCTIONALITY https://www.florin-pop.com/blog/2019/06/vanilla-javascript-instant-search/
