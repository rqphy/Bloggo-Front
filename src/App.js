import './App.css'
import PostForm from './Components/PostForm/PostForm'
import BlogPost from './Components/BlogPost/BlogPost'

const App = () =>
{
return (
    <div className="App">
        <PostForm />
        <div className='App__postslist'>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
    </div>
)
}

export default App
