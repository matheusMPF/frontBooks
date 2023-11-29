import Book from "../imgs/book.png"
import Author from "../imgs/author.png"
import BookPublisher from "../imgs/bookPublisher.png"
import Cards from "../components/cards/Cards";


const Admin = () => {

    return(
        <main>
        <ul class="card-listing">
          <Cards link="/adminBook" info="Livros" srcImg={Book} altImg="Imagem de livro" description="Cadastre, liste e busque os livros aqui" />
          <Cards link="/adminAuthor" info="Autor" srcImg={Author} altImg="Imagem de autor genérico" description="Cadastre, liste e busque os autores aqui" />
          <Cards link="/adminBookPublisher" info="Editora" srcImg={BookPublisher} altImg="Imagem de lápis" description="Cadastre, liste e busque as editoras aqui" />
        </ul>
      </main>
    )

}

export default Admin;