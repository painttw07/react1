import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';


export default class Main extends Component {
    state = { //variável estado do react
        products: []


    };
    componentDidMount() {
        this.loadProducts();

    }
    loadProducts = async () => {
        const response = await api.get('./products');

        this.setState({ products: response.data.docs });


    };
    prevPage = () => { };
    nextPage = () => { };


    render() { //escutando a variavel de estado e atualiza conforme ela
        const { products } = this.state;

        return (
            <div className="products-list">
                {products.map(products => (
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>


                        <a href="">Acessar</a>
                    </article>
                ))}
                <div>
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
        {/* <h1>Contagem produtos: {this.state.products.length}</h1> */ }


        // return <h1>Hello</h1>
    }
}