import React, { useEffect, useState } from 'react';
import http from '../Service/http';
import "../Styles/Tables.css"
import "../Styles/Form.css"
import Button from '../components/button/Button';
import Input from '../components/input/Input';

import {listarAutor, cadastroAuthor} from '../Service/authorService';

const AdminAuthor = () => {

    const [dados, setDados] = useState([]);
    const [cpf, setCpf] = useState();
    const [name, setName] = useState();

    async function addAuthor(event){
        event.preventDefault(); //Evita do formulário fazer submit na página
        if(await cadastroAuthor(cpf, name)){
            alert('cadastrado com sucesso')
            setCpf('')
            setName('')
        }
        listAuthor()
    }

    async function listAuthor(){
        try{
            const dados = await listarAutor()
            setDados(dados)
        } catch(error){
            alert("erro ao tentar buscar os Autores", error)
        }
    }

    async function desativar(dado){
        try{
            await http.put(`Book/activateInactiveAuthor/${dado.cpf}`)
            listAuthor()
        } catch(error){
            alert("Erro ao desativar o livro", error)
        }
    }

    async function editar(dado){
        try{
            setCpf(dado.cpf)
            setName(dado.name)

        } catch(error){
            alert("Erro ao editar Autor", error)
        }
    }

    useEffect(() => {
        listAuthor();
    }, []);




    return(
        <div className='Container'>
            <h2>Lista de Autores</h2>

            <table className='tableAdmin'>
                <thead>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th colSpan={2}></th>
                </thead>
                <tbody>
                    {dados.length > 0 ? (
                        dados.map(dado =>(
                            <tr key={dado.cpf}>
                                <td>{dado.cpf}</td>
                                <td>{dado.name}</td>

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

            <form onSubmit={(event)=>addAuthor(event)} className='formAdmin'>
                <h2>Adicionar livro</h2>

                <Input placeholder="CPF" type="text" value={cpf} name="cpf" onChange={(event)=>setCpf(event.target.value)} />
                <Input placeholder="Nome" type="text" value={name} name="name" onChange={(event)=>setName(event.target.value)} />

                <Button className="btn-add" nameButton="Adicionar"/>
            </form>
        </div>
    )
}

export default AdminAuthor;