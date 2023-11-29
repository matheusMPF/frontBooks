import http from "./http";

export const cadastroAuthor = async (cpf, name) =>{
    return await http.post('Author/registerAuthor', {cpf, name})
    .then(resp => {
        console.log(cadastroAuthor);
        return true;
        
    }).catch(err=>{
        console.log(err)
        return false;
    })
}

export const listarAutor = async () =>{
    return await http.get('Author/listAllAuthors')
    .then(resp => {
        return resp.data;
    }).catch(err=>{
        console.log(err)
        return null;
    })
}