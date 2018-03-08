
var JavaBook = {
  "ISBN": "0-596-0016-2",
  "Title": "Java and XML",
  "Price": "39.95",
  "Publisher": "O'Reilly &amp; Associates",
  "Authors": {
    "Author": {
      "Fname": "Brett",
      "Lname": "McLaughlin",
      "AuthorPrice": "22.00",
    }
  }
  "Copyright": "2000",
  "Comments": "Update Required",
}

var VB6Book = {
  "ISBN": "1-861003-32-3",
  "Title": "Professional Visual Basic 6 XML",
  "Price": "49.99",
  "Publisher": "Wrox Press",
  "Authors": {
    "Author": {
      "Fname": "James",
      "Lname": "Britt",
      "AuthorPrice": "",
    }
    "Author": {
      "Fname": "Tuen",
      "Lname": "Duynstee",
      "AuthorPrice": "",
    }
  }
  "Copyright": "2000",
  "Comments": "Outdated text. Switch to C#",
}

var book = ["JavaBook", "VB6Book"];

JSON.stringify(JavaBook); //converts JS Obect of JavaBook to JSON
JSON.stringify(VB6Book); //converts JS Obect of VB6Book to JSON
JSON.stringify(book); //converts JS Object of book to JSON
