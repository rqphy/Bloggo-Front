import './App.css'
import PostForm from './Components/PostForm/PostForm'
import BlogPost from './Components/BlogPost/BlogPost'
import { useEffect, useState } from 'react'


const App = () =>
{
    const [fetchedData, setFetchedData] = useState([])

    useEffect(() =>
    {
        fetch('/data/posts.json',{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => 
            {
                setFetchedData(data)
            })
    }, [])

    return (
        <div className="App">
            <PostForm />
            <h2 className='subtitle'>Posts</h2>
            <div className='App__postslist'>
                {
                    fetchedData.map((data, index) => 
                        <BlogPost key={index} title={data.title} content={data.content} author={data.author}/>
                    )
                }
            </div>
        </div>
    )
}

export default App
