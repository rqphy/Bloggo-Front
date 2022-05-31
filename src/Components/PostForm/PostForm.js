import './PostForm.css'

const handlePostSubmit = (_event) =>
{
    _event.preventDefault()
    console.log(_event)
}

const PostForm = () =>
{

    return (
        <div className="PostForm">
            <h2 className='subtitle'>Create a post</h2>
            <form onSubmit={handlePostSubmit}>
                <input className='PostForm__title' type="text" placeholder="Title" name="title" />
                <textarea type="text" placeholder="Content" name="content" />
                <input className='cta' type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default PostForm
