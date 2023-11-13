import React, { useEffect, useState } from 'react';
import http from '../Service/http';
import "../Styles/Tables.css"
import "../Styles/Form.css"

const AdminBook = () => {

    const [dados, setDados] = useState([]);
    const [formData] = useState({
        isbn: '',
        title: '',
        author: '',
        edition: '',
        price: '',
        highlights: '',
        active: '',
    })

    async function addBook() {
        try {
            http.post('/Book/registerBook', data)
                .then(response => {
                    console.log(response.data);
                })
        }
        catch (error) {
            console.log(error);
        };
    }



    // Listar os livros
    async function listBooks() {
        try {
            const response = await http.get('Book/listAllBooks');
            setDados(response.data);
        } catch (error) {
            console.log('Erro ao buscar os livros:', error);
        }
    }

    useEffect(() => {
        listBooks();
    }, []);

    return (
        <div>
            <h2>Lista de Livros</h2>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Edição</th>
                        <th>Preço</th>
                        <th>Destaques</th>
                        <th>Ativar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.length > 0 ? (
                        dados.map(dado => (
                            <tr key={dado.isbn}>
                                <td>{dado.isbn}</td>
                                <td>{dado.title}</td>
                                <td>{dado.author}</td>
                                <td>{dado.edition}</td>
                                <td>{dado.price}</td>
                                <td>
                                    {dado.highlights ? 'True' : 'False'}
                                </td>
                                <td>
                                    {dado.active ? 'True' : 'False'}
                                </td>
                                <td><button>Editar</button></td>
                                <td><button>Excluir</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Não existem dados</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* <button className="add-button">ADD Novo +</button> */}

            <form className='formAdmin'>

                <h2>Adicionar Livro</h2>

                <input placeholder='ISBN' type="text" name="isbn" value={formData.isbn} />
                <input placeholder='Título' type="text" name="title" value={formData.title} />
                <input placeholder='Autor' type="text" name="author" value={formData.author} />
                <input placeholder='Edição' type="text" name="edition" value={formData.edition} />
                <input placeholder='Preço' type="text" name="price" value={formData.price} />
                <label> Destaques
                    <input placeholder='Destaque' type="checkbox" name="highlights" checked={formData.highlights} />
                </label>
                <label> Ativo
                    <input placeholder='Ativo' type="checkbox" name="active" checked={formData.active} />
                </label>
                <button onClick={addBook} className='btn-add'>Adicionar</button>
            </form>

            <div className="mascara-form"></div>

        </div>
    );
}

export default AdminBook;