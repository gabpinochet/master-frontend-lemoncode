class Book {
    title: string;
    isRead: boolean;

    constructor(title: string, isRead: boolean){
        this.title = title;
        this.isRead = isRead;
    }
}


const books:Book[] = [
    new Book("Harry Potter y la piedra filosofal", true),
    new Book("Canción de hielo y fuego",  false),
    new Book("Devastación", true ),
];

function isBookRead(books:Book[], titleToSearch:string):boolean {
    let found = books.find(books => books.title === titleToSearch);
    
    if (found != undefined) {
        return found.isRead
    } else {
        return false;
    }

}

  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false