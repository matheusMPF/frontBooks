import { useState, useEffect } from "react";
import { listarLivros } from "../../Service/livroService";
import "./CardsBooks.css"
import { CiShoppingCart } from "react-icons/ci";

const CardBooks = (props) => {

    const [dados, setDados] = useState([]);

    function addCar (){
        alert('Livro Adicionado ao carrinho')
    }

    async function listBooks() {
        try {
            const dados = await listarLivros()
            setDados(dados)
        } catch (error) {
            alert("erro ao tentar buscar os livros", error)
        }
    }

    useEffect(() => {
        listBooks();
    }, []);

    return (

        <>

            {dados.length > 0 ? (
                dados.map(dado => (
                    <div className="card-book">
                        
                            <div className="card-title">{dado.title}</div>
                            <div><img className="img-card-book" src={"http://localhost:8080" + dado.image}></img></div>
                            <div className="card-subtitle">{dado.edition}</div>
                            <div className="card-footer">
                                <div className="card-price"><span>$</span>{dado.price}</div>
                                <button className="card-btn">
                                    <CiShoppingCart className="imgs-links"  onClick={addCar}/>
                                </button>
                            </div>



                        
                    </div>
                ))
            ) : (
                <tr><td colSpan={8}>Não existem dados</td></tr>
            )
            }

        </>
    )
}

export default CardBooks;