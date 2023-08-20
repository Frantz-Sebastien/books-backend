DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    book TEXT NOT NULL,
    author TEXT,
    image TEXT,
    genre TEXT,
    release_year INTEGER,
    has_read BOOLEAN,
    pages INTEGER,
    favorite BOOLEAN 
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    content TEXT,
    book_id INTEGER REFERENCES books (id)
    ON DELETE CASCADE
);