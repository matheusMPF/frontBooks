import Cards from "./components/cards/Cards";

import "./app.css"
import Book from "./imgs/book.png"
import Author from "./imgs/author.png"
import BookPublisher from "./imgs/bookPublisher.png"

function App() {
  return (
    <div className="App">
      <Cards info="Livros" srcImg={Book} altImg="Imagem de livro" description="Cadastre, liste e busque os livros aqui" />
      <Cards info="Autor" srcImg={Author} altImg="Imagem de autor genérico" description="Cadastre, liste e busque os autores aqui" />
      <Cards info="Editora" srcImg={BookPublisher} altImg="Imagem de lápis" description="Cadastre, liste e busque as editoras aqui" />
    </div>
  );
}

export default App;