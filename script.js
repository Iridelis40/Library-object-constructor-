const myLibrary = [];



const main = document.querySelector("main");
const library = document.querySelector("#library");


const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
    main.style.visibility = "visible";
})


//constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


/*let hobbit = new Book("Hobbit", "Tolkien", "3456");
console.log(hobbit.pages);*/

submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(){
    event.preventDefault();
    addNewBook();
    render();

})


function addNewBook() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    let item = new Book(title, author, pages);
    let itemTag = `${item.title} by ${item.author}, ${item.pages} pages`;
    myLibrary.unshift(itemTag);
    console.log(item);
    console.log(myLibrary);
}

function render() {
    const div = document.createElement("div");
    library.append(div);
    div.textContent = myLibrary[0];
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    div.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();     
    });
}

