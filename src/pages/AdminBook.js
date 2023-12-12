import React, { useEffect, useState } from 'react';
import http from '../Service/http';
import "../Styles/Tables.css"
import "../Styles/Form.css"
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import {cadastroLivro, listarLivros} from '../Service/livroService';
import SingleFileUploader from '../components/fileUpload/FileUpload';

const AdminBook = () => {

    const [dados, setDados] = useState([]);
    const [isbn, setIsbn] = useState();
    const [title, setTitle] = useState();
    const [edition, setEdition] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState(null);


    //Cadastrar um livro
    async function addBook(event){
        const book = {
            isbn, 
            title, 
            edition, 
            price
        };
      
        const formData = new FormData();
        formData.append('book', new Blob([JSON.stringify(book)], {
            type: "application/json"
        }));
        formData.append('foto', file);
        event.preventDefault(); //Evita do formulário fazer submit na página
        if(await cadastroLivro(formData)){
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
            
            <form onSubmit={(event)=>addBook(event)} className='formAdmin'>
                <h2>Adicionar livro</h2>

                <Input placeholder="Isbn" type="text" value={isbn} name="isbn" onChange={(event)=>setIsbn(event.target.value)} />
                <Input placeholder="Título" type="text" value={title} name="title" onChange={(event)=>setTitle(event.target.value)} />
                <Input placeholder="Descrição" type="text" value={edition} name="edition" onChange={(event)=>setEdition(event.target.value)} />
                <Input placeholder="Preço" type="number" value={price} name="price" onChange={(event)=>setPrice(event.target.value)} />
                <SingleFileUploader setStates={setFile}/>
                <Button className="btn-add" nameButton="Adicionar"/>
            </form>
            
            <h2>Lista de livros</h2>

            <table className='tableAdmin'>
                <thead>
                    <th>ISBN</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Imagem</th>
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
                                <td><img src={"http://localhost:8080"+dado.image} width="50px"></img></td>

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

        </div>
    );
}

export default AdminBook;