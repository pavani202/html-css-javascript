// let allBooks = [{
//     id:1,
//     title:"Angels and Demons",
//     author:"Dan Brown",
//     ratings:[3,3.5,4.2],
//     reviews:[{
//         username:"John",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor quibusdam rerum nihil accusantium dolorem cupiditate illo quam voluptatibus quas dignissimos tempore unde corporis modi esse doloremque, laudantium accusamus debitis."
//     },{
//         username:"Jane",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor quibusdam rerum nihil accusantium dolorem cupiditate illo quam voluptatibus quas dignissimos tempore unde corporis modi esse doloremque, laudantium accusamus debitis."
//     } ,
//     {
//         username:"Bob",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor quibusdam rerum nihil accusantium dolorem cupiditate illo quam voluptatibus quas dignissimos tempore unde corporis modi esse doloremque, laudantium accusamus debitis."
//     }]
// }];

function Book(title, author, year){
    this.title =title;
    this.author = author;
    this.year = year;
    this.id = Date.now().toString();
    this.ratings = [];
    this.reviews = {};
}

const bookCOllection = {books:[],
    addBook: function(book){
        this.book.push(book);
        console.log("Book added succesfully")
    }
}

let expression = -1;

do{
    console.log("Choose an option: \n1. Add a book\n2. Remove a book\n3. Search for a book\n4. Add a rating \n5.Add a review\n6. Compoute average of all books\n7. Exit")
     expression = prompt("Enter your choice!..");
    switch(expression){
        case 1:let title = prompt("Enter the title..");
        let author = prompt("Enter the author..");
        let year = prompt("Enter the release year..");
        let newBook = new Book( addBook(title,author,year))
        addBook(title,author,year);

        break;
        case 2:break;
        case 3:break;
        case 4: break;
        case 5:break;
        case 6:break;
        case 7:break;
        default:;

    }

}while(choice>=1 && choice <7)