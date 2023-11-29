import React, { useEffect, useState } from 'react';
import http from '../Service/http';
import "../Styles/Tables.css"
import "../Styles/Form.css"
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import {cadastroLivro, listarLivros} from '../Service/livroService';

const AdminBook = () => {

    const [dados, setDados] = useState([]);
    const [isbn, setIsbn] = useState();
    const [title, setTitle] = useState();
    const [edition, setEdition] = useState();
    const [price, setPrice] = useState();


    //Cadastrar um livro
    async function addBook(event){
        event.preventDefault(); //Evita do formulário fazer submit na página
        if(await cadastroLivro(isbn, title, edition, price)){
            alert('cadastrado com sucesso')
            setPrice('')
            setEdition('')
            setIsbn('')
            setTitle('')
        }
        listBooks()
    }

    //Listar lisvros cadastrados
    async function listBooks(){
        try{
            const dados = await listarLivros()
            setDados(dados)
        } catch(error){
            alert("erro ao tentar buscar os livros", error)
        }
    }

    //Destivar um livro
    async function desativar(dado){
        try{
            await http.put(`Book/activateInactiveBook/${dado.isbn}`)
            listBooks()
        } catch(error){
            alert("Erro ao desativar o livro", error)
        }
    }

    //Editar um livro
    async function editar(dado){
        try{
            setIsbn(dado.isbn)
            setEdition(dado.edition)
            setPrice(dado.price)
            setTitle(dado.title)

            
        } catch(error){
            alert("Erro ao editar livro", error)
        }
    }

    //Atualizar dados automaticamente
    useEffect(() => {
        listBooks();
    }, []);

    return (
        <div className='Container'>
            <h2>Lista de livros</h2>

            <table className='tableAdmin'>
                <thead>
                    <th>ISBN</th>
                    <th>Título</th>
                    <th>Edição</th>
                    <th>Preço</th>
                    <th colSpan={2}></th>
                </thead>
                <tbody>
                    {dados.length > 0 ? (
                        dados.map(dado =>(
                            <tr key={dado.isbn}>
                                <td>{dado.isbn}</td>
                                <td>{dado.title}</td>
                                <td>{dado.edition}</td>
                                <td>{dado.price}</td>

                                <td><Button className="btn-action-edit" onClick={() => editar(dado)} nameButton="Editar"/></td>
                                <td><Button className="btn-action-active" onClick={() => desativar(dado)} nameButton={dado.active ? 'Desativar' : 'Ativar'}/></td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan={8}>Não existem dados</td></tr>
                    )
                }
                </tbody>
            </table>

            <form onSubmit={(event)=>addBook(event)} className='formAdmin'>
                <h2>Adicionar livro</h2>

                <Input placeholder="Isbn" type="text" value={isbn} name="isbn" onChange={(event)=>setIsbn(event.target.value)} />
                <Input placeholder="Título" type="text" value={title} name="title" onChange={(event)=>setTitle(event.target.value)} />
                <Input placeholder="Edição" type="text" value={edition} name="edition" onChange={(event)=>setEdition(event.target.value)} />
                <Input placeholder="Preço" type="number" value={price} name="price" onChange={(event)=>setPrice(event.target.value)} />

                <Button className="btn-add" nameButton="Adicionar"/>
            </form>
        </div>
    );
}

export default AdminBook;