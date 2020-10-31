import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = { //variável estado do react
        products: [],
        productsInfo: {},
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async (page = 1) => { //manipulação de produtos (dados) da api
        const response = await api.get('./products');
        const { docs, ...productsInfo } = response.data; //duas variaveis, uma tem produtos e outra tem o resto
        this.setState({ products: docs, productsInfo, page });

    };
    //métodos de manipulação de páginas

    deleteButton = () => {
        const { page, productsInfo } = this.state;
        if (page === 1) return; //pagina atual =1

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    createButton = () => {
        const { page, productsInfo } = this.state;
        if (page === productsInfo.pages) return; //se for a ultima pagina, retorna nada
        const pageNumber = page + 1; //pega a proxima
        this.loadProducts(pageNumber);

    };

    render() { //escutando a variavel de estado e atualiza conforme ela
        const { products, page, productsInfo } = this.state; //declaration

        return (
            <div className="products-list">
                {products.map(products => (
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>

                        <Link to={`/products/${products._id}`}>Acessar</Link>

                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.createButton}>
                        Create
                    </button>
                    <button onClick={this.deleteButton}>
                        Delete
                        </button>
                </div>
            </div>
        );
    }
}