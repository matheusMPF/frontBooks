import http from "./http";

export const cadastroLivro = async (isbn, title, author, edition, price) =>{
    return await http.post('Book/registerBook', {isbn, title, author, edition, price})
    .then(resp => {
        return true;
    }).catch(err=>{
        console.log(err)
        return false;
    })
}

export const listarLivros = async () =>{
    return await http.get('Book/listAllBooks')
    .then(resp => {
        return resp.data;
    }).catch(err=>{
        console.log(err)
        return null;
    })
}