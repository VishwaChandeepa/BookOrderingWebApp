import heroImage from "../assets/hero/hero-banner.jpg";

import javaBook from "../assets/book/java.jpg";
import reactBook from "../assets/book/react.jpg";
import nodeBook from "../assets/book/node.jpg";
import pythonBook from "../assets/book/python.jpg";


function Home() {

  const books = [
    {
      title: "Java Programming",
      image: javaBook,
      price: "2500"
    },
    {
      title: "React Development",
      image: reactBook,
      price: "3000"
    },
    {
      title: "Node.js Backend",
      image: nodeBook,
      price: "2800"
    },
    {
      title: "Python Programming",
      image: pythonBook,
      price: "2700"
    }
  ];


  return (

    <div>

      {/* Hero Section */}

      <section>

        <img
          src={heroImage}
          alt="Library"
          className="w-full h-[400px] object-cover"
        />

      </section>



      {/* Featured Books */}

      <section className="p-10">


        <h1 className="text-4xl font-bold text-center mb-8">
          Featured Books
        </h1>



        <div className="grid md:grid-cols-4 gap-6">


          {
            books.map((book,index)=>(

              <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              >


                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />


                <div className="p-4">


                  <h2 className="text-xl font-bold">
                    {book.title}
                  </h2>


                  <p className="mt-2">
                    Rs. {book.price}
                  </p>


                  <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                  >

                    Add to Cart

                  </button>


                </div>


              </div>


            ))
          }


        </div>


      </section>


    </div>

  );

}


export default Home;