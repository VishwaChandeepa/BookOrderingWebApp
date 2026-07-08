import { useEffect, useState } from "react";
import API from "../api/axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await API.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Books</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
              alt={book.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">{book.title}</h2>

              <p className="text-gray-600">
                {book.description}
              </p>

              <p className="font-bold mt-3">
                Rs. {book.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;