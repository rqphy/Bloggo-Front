import './App.css'
import PostForm from './Components/PostForm/PostForm'
import BlogPost from './Components/BlogPost/BlogPost'

const App = () =>
{
return (
    <div className="App">
        <PostForm />
        <h2 className='subtitle'>Posts</h2>
        <div className='App__postslist'>
            <BlogPost title="Hello world!" content="First Post hehe!" author="Toto"/>
            <BlogPost title="Wassup yall" content="Lorem 4 life" author="Gilbert"/>
            <BlogPost title="How to make a blog with react" content="No idea just tryin" author="YellowS"/>
            <BlogPost title="Testtestset" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author="Vroom"/>
        </div>
    </div>
)
}

export default App
