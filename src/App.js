import React from 'react';
import './styles/app.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import PostItem from './components/PostItem/PostItem';

class App extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.state.posts !== prevState.posts) {
            localStorage.setItem('posts', JSON.stringify(this.state.posts));
        }
    }

    componentDidMount() {
        const posts = localStorage.getItem('posts');
        if (posts) {
            const parsed = JSON.parse(posts);
            this.setState({
                posts: parsed,
            });
            this.id = parsed[0] ? parsed[0].id : 0;
        }
    }

    id = 2;
    state = {
        modalOpen: false,
        posts: [
            {
                id: 2,
                text: 'text1',
                date: '2019-03-11 01:03:15',
            },
            {
                id: 1,
                text: 'text2',
                date: '2019-03-10 01:03:15',
            },
            {
                id: 0,
                text: 'text3',
                date: '2019-03-09 01:03:15',
            },
        ],
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
                                    id: ++this.id,
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
                </ul>
            </div>
        )
    }
}
export default App;