import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from './components/Article';
import Loader from '../../components/Loader';
import { fetchArticleIfNeeded } from '../../actionCreators';

class ArticlePage extends Component {
    loadArticle(id) {
        if (this.props.article && !this.props.article.isLoading) {
            this.props.fetchArticleIfNeeded(id);
        }
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
            <Loader condition={() => !this.props.article.isLoading}>
                <Article article={this.props.article} />
            </Loader>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const articleId = ownProps.match.params.id;
    return {
        article: state.articles[articleId] || {}
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticleIfNeeded: (id) => {
            dispatch(fetchArticleIfNeeded(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);