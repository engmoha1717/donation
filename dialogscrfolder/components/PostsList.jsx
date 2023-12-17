

import Post from './Post';
import classes from './post.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
//dummy_data  array  key tittle author description
const data = [
    {
        id: "1",
        tittle: 'The Catcher in the Rye',
        author: "J.D. Salinger",
        description: "A classic coming-of-age story about a young boy named Holden Caulfield who is struggling to fit into society."
    },
    {
        id: "2",
        tittle: 'To Kill A Mockingbird',
        author: "Harper Lee",
        description:
            "A powerful novel that explores racial injustice and prejudice through the eyes of a young girl growing up during the Great Depression."
    }
]

function PostsList({onModalHandler,open}) {

   
    return (
        <>
        {
        open ? 
        <Modal onClose={onModalHandler}>
            <NewPost/>
        </Modal>:null
        }
                <div className={classes.postslist}>
        {
            data.map(post => (
                <Post 
                key={post.id}
                tittle={post.tittle}
                author={post.author}
                description={post.description}
                />
                ))
            }
        </div>
        </>
    )
}
export default PostsList;

