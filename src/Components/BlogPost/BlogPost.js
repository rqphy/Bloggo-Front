import './BlogPost.css'

const BlogPost = () =>
{
    return (
        <article className="BlogPost">
            <p className='BlogPost__title'>Hello World</p>
            <span className='BlogPost__author'>by: Toto</span>
            <p className='BlogPost__content'>First Post !</p>
        </article>
    )
}

export default BlogPost
