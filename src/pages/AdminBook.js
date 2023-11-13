import React, { useEffect, useState } from 'react';
import http from '../Service/http';
import "../Styles/Tables.css"
import "../Styles/Form.css"

const AdminBook = () => {

    const [dados, setDados] = useState([]);
    const [formData, setFormData] = useState({
        isbn: '',
        title: '',
        author: '',
        edition: '',
        price: '',
        // highlights: false,
        // active: false,
    });

    // Listar os livros
    async function listBooks() {
        try {
            const response = await http.get('Book/listAllBooks');
            setDados(response.data);
        } catch (error) {
            console.log('Erro ao buscar os livros:', error);
        }
    }

    //Cadastrar livros
    async function addBook() {
        try {
            await http.post('Book/registerBook', formData);

            listBooks();
        } catch (error) {
            console.log('Erro ao adicionar livro:', error);
        }
    }

    useEffect(() => {
        listBooks();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    
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

                <input placeholder='ISBN' type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} />
                <input placeholder='Título' type="text" name="title" value={formData.title} onChange={handleInputChange} />
                <input placeholder='Autor' type="text" name="author" value={formData.author} onChange={handleInputChange} />
                <input placeholder='Edição' type="text" name="edition" value={formData.edition} onChange={handleInputChange} />
                <input placeholder='Preço' type="text" name="price" value={formData.price} onChange={handleInputChange} />
                <label> Destaques
                <input placeholder='Destaque' type="checkbox" name="highlights" checked={formData.highlights} onChange={handleInputChange} />
                </label>
                <label> Ativo
                <input placeholder='Ativo' type="checkbox" name="active" checked={formData.active} onChange={handleInputChange} />
                </label>
                <button onClick={addBook} className='btn-add'>Adicionar</button>
            </form>

            <div className="mascara-form"></div>

        </div>
    );
}

export default AdminBook;