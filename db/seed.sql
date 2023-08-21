\c books_dev;








INSERT INTO books (book, author, image, genre, release_year, has_read, price, favorite) VALUES
('Harry Potter and the Half-Blood Prince', 'J.K. Rowling','https://m.media-amazon.com/images/I/61sXBXmAWML._AC_UF1000,1000_QL80_.jpg', 'fantasy', 2005, true, 17, true),
('Romeo and Juliette', 'William Shakespeare', 'https://m.media-amazon.com/images/I/41uJIT8vkrL._SX322_BO1,204,203,200_.jpg', 'tragedy', 1597, true, 7, false),
('The Hunger Games', 'Suzanne Collins','https://images.csmonitor.com/csmarchives/2010/08/47479711.JPG?alias=standard_900x600','science fiction', 2008, true, 9, true),
('Batman: Hush', 'Jeph Loeb', 'https://m.media-amazon.com/images/I/A1Gb8vuZiCL._AC_UF1000,1000_QL80_.jpg', 'superhero', 2002, true, 21, true ),
('Oliver Twist', 'Charles Dickens', 'https://m.media-amazon.com/images/I/91ZLjkG+YNL._AC_UF1000,1000_QL80_.jpg', 'fiction', 1838, false, 8, false),
('Titeuf et le derrière des choses', 'Zep', 'https://m.media-amazon.com/images/I/81vq0SQhIGL._AC_UF1000,1000_QL80_.jpg', 'comedy', 1996, true, 19, true),
('1984', 'George Orwell', 'https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg', 'fiction', 1949, true, 6, true)
;


INSERT INTO reviews (book_id, reviewer, rating, content) VALUES
(7, 'Frantz', 5, 'One of the scariest book I ever read in my life'),
(1, 'Kelsea', 5, 'This is perhaps my favorite book in the Harry Potter series'),
(5, 'Andre', 1, 'This book is a snore'),
(3, 'Paola', 5, 'This is a great book and it was used for a great movie'),
(1, 'Kristy', 4, 'It was in that book that things started to get real'),
(2, 'Maurice', 2, 'I will not poison myself for anyone. That is just nuts'),
(4, 'Greg', 5, 'My favorite of Batman graphic novel')
;