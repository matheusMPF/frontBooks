const TableBooks = () => {
    return (
        <table striped bordered hover>
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Edição</th>
                    <th>Categorias</th>
                    <th>Páginas</th>
                    <th>Preço</th>
                    <th>Destaque</th>
                    <th>Ativar/Desativar</th>
                    <th>Editar</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Minha vida fora de série</td>
                    <td>Paula Pimenta</td>
                    <td>Gutenberg</td>
                    <td>Edição 10</td>
                    <td>Ficção</td>
                    <td>408</td>
                    <td>44,90</td>
                    <td><button>True or false</button></td>
                    <td><button>True or false</button></td>
                    <td><button>Editar</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default TableBooks;