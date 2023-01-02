import  React from 'react'
import style from './post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://belohota.by/images/animals/volk.jpg" alt="error" />
            {props.message} 
            <div>
                <span className={style.likes}>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;