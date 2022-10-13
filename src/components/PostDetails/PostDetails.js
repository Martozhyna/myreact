import css from './PostDetails.module.css';

function PostDetails ({detail}) {
    return (
        <div className={css.PostDetails}>
            <p> <b>{detail.id}.</b> <b>Body:</b> {detail.body}</p>
        </div>
    )
}
export {PostDetails}