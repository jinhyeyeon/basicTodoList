import React from 'react';
import './styles/app.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import PostItem from './components/PostItem/PostItem';
import NoContent from './components/NoContent/NoContent';

class App extends React.Component {
    state = {
        modalOpen: false,
        posts: [],
    }

    componentDidMount() {
        const posts = localStorage.getItem('posts');
        if (posts) {
            const parsed = JSON.parse(posts);
            this.setState({
                posts: parsed,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.posts !== prevState.posts) {
            localStorage.setItem('posts', JSON.stringify(this.state.posts));
        }
    }

    render() {
        const {modalOpen, posts} = this.state;
        return (
            <div className="app">
                <Header
                    onModal={() => this.setState({modalOpen: true})}
                />
                {modalOpen && (
                    <Modal
                        onClose={() => this.setState({modalOpen: false})}
                        onWrite={text => {
                            this.setState({
                                posts: [
                                {
                                    id: posts.length,
                                    text,
                                    date: new Date(),
                                },
                                ...this.state.posts,
                                ],
                                modalOpen: false
                            })
                        }}
                    />
                )}
                <ul className="post">
                    {posts.map(post => 
                        <li key={post.id}>
                            <PostItem
                                onDelete={id => this.setState({posts: posts.filter(post => post.id !== id)})}
                                {...post}
                            />
                        </li>
                    )}
                    {posts.length === 0 && (
                        <li>
                            <NoContent />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default App;