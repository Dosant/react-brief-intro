import React, { Component } from 'react';
import { getArticleById } from '../../services/data';
import Article from './components/Article';
import Loader from '../../components/Loader';

class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: null,
            isLoading: true            
        }

        this.isArticleLoaded = this.isArticleLoaded.bind(this);
    }

    loadArticle(id) {
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            const article = getArticleById(id)
            this.setState({
                article,
                isLoading: false
            });            
        }, 1000);
    }

    isArticleLoaded() {
        return !this.state.isLoading;
    }

    componentDidMount() {
        const articleId = this.props.match.params.id;
        this.loadArticle(articleId);
    }

    componentWillReceiveProps(nextProps) {
        const currentArticleId = this.props.match.params.id;
        const nextArticleId = nextProps.match.params.id;

        if (currentArticleId !== nextArticleId) {
            this.loadArticle(nextArticleId);
        }
    }

    render() {
        return (
            <Loader condition={this.isArticleLoaded}>
                <Article article={this.state.article} />
            </Loader>
        );
    }
}

export default ArticlePage;