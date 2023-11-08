import React, { Component } from 'react';
import axios from 'axios';

class BookForm extends Component {
  state = {
    title: '',
    author: '',
    isbn: '',
    pages: 0,
    price: 0.0,
    summary: '',
    edition: '',
    type: '',
    highlights: false,
    active: false,
    bookPublisher: null,
    category: [],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, author, isbn, pages, price, summary, edition, type, highlights, active, bookPublisher, category } = this.state;
    if (!title || !author) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await axios.post('http://seu-backend-java.com/api/books', {
        title,
        author,
        isbn,
        pages,
        price,
        summary,
        edition,
        type,
        highlights,
        active,
        bookPublisher,
        category,
      });
      this.props.onBookAdded(); // Chame a função fornecida pelo componente pai para atualizar a lista de livros
      this.setState({
        title: '',
        author: '',
        isbn: '',
        pages: 0,
        price: 0.0,
        summary: '',
        edition: '',
        type: '',
        highlights: false,
        active: false,
        bookPublisher: null,
        category: [],
      });
    } catch (error) {
      console.error('Erro ao adicionar um livro:', error);
    }
  };

  render() {
    return (
      <div>
        <h2>Adicionar Novo Livro</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Adicione os campos do formulário aqui */}
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          {/* Outros campos do formulário... */}
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}

export default BookForm;