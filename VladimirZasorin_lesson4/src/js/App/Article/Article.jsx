import React, { Component } from 'react';
import './style.css';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const article = this.props.children;
        const body = <section className="card-text">{article.text}</section>;
        return (
            <div className="card mx-auto article">
                <div className="card-header">
                    <h2>
                        { article.id }
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date: {(new Date().toDateString())}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    handleClick() {
        console.log('----', 'clicked');
        const oldValue = this.state.isOpen;
        this.setState({ 
            isOpen: !oldValue
        });
    }
}