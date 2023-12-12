import http from "./http";

export const cadastroLivro = async (book) =>{
 
    return await http.post('Book/registerBook', book, {
        header: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }})
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