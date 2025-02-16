import { useState } from "react"

function Management(){
    const [posts,setPosts] = useState([])

    function handlePost(e){
        e.preventDefault()

        setPosts(prev => [...prev,{
            name: e.target.name.value,
            title:e.target.title.value,
            text: e.target.post.value
        }])
    }

    console.log(posts)
    return(
        <>
            <h1>Posts Page</h1>
            <form onSubmit={handlePost}>
                <input type="text" name="name" />
                <input type="text" name="title" placeholder="Enter the Post Title"/>
                <textarea name="post" placeholder="What's on your mind" />
                <button>Submit</button>
            </form>

            {
                posts.map(post =>
                    <div>
                        <h1>{post.name}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                    </div>
                )
            }
        </>
    )
}
export default Management