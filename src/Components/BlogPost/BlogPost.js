import './BlogPost.css'

const BlogPost = ({ title, author, content }) =>
{
    return (
        <article className="BlogPost">
            <p className='BlogPost__title'>{ title }</p>
            <span className='BlogPost__author'>{ author }</span>
            <p className='BlogPost__content'>{ content }</p>
        </article>
    )
}

export default BlogPost
