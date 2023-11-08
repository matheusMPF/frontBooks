import React, { useEffect, useState } from 'react';
import http from '../../Service/http';

const TableBooks = () => {
    const [dados, setDados] = useState([]);

    async function listBooks(){
        return http.get('Book/listAllBooks')
        .then(resp => {
            return resp.data;
        }).catch(erro => {
            console.log(erro)
        })
    }

    useEffect(() => {
        listBooks()
    },[]);

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
                    {(
                        dados.map(dado => (
                            <tr key={dado.isbn}>
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
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableBooks;