import css from './User.module.css';

function User ({user}) {
    return (
        <div className={css.User}>
            <h3>{user.id}. {user.name}</h3>
        </div>
    )
}
export {User}