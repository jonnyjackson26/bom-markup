class Book:
    def __init__(self, num_of_chapters, book_name, url_name):
        self.num_of_chapters = num_of_chapters
        self.book_name = book_name
        self.url_name = url_name

    def to_dict(self):
        # Convert the Book object to a dictionary
        return {
            "num_of_chapters": self.num_of_chapters,
            "book_name": self.book_name,
            "url_name": self.url_name
        }

books = [
    Book(22, "1 Nephi", "1-nephi"),
    Book(33, "2 Nephi", "2-nephi"),
    Book(7, "Jacob", "jacob"),
    Book(1, "Enos", "enos"),
    Book(1, "Jarom", "jarom"),
    Book(1, "Omni", "omni"),
    Book(1, "Words of Mormon", "words-of-mormon"),
    Book(29, "Mosiah", "mosiah"),
    Book(63, "Alma", "alma"),
    Book(16, "Helaman", "helaman"),
    Book(30, "3 Nephi", "3-nephi"),
    Book(1, "4 Nephi", "4-nephi"),
    Book(9, "Mormon", "mormon"),
    Book(15, "Ether", "ether"),
    Book(10, "Moroni", "moroni")
]
