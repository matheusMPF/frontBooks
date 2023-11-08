import React, { useEffect, useState } from 'react';
import http from '../../Service/http';
import "../../Styles/Tables.css"

const TableBooks = () => {
    const [dados, setDados] = useState([]);

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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Não existem dados</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="table-buttons">
                <button className="reload-button">Recarregar</button>
                <button className="add-button">Adicionar</button>
            </div>
        </div>
    );
}

export default TableBooks;