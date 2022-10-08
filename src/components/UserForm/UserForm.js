import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators/user.validator";
import {userService} from "../../services";

function UserForm ({setUsers}) {
let {register,handleSubmit,reset, formState: {errors,isValid}} = useForm({resolver: joiResolver(userValidator), mode: "all"});

    const submit = async (user) => {
        let {data} = await userService.create(user);
        console.log(data)
        setUsers(users => [...users, data])
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'phone'} {...register('phone', {valueAsNumber: true})}/>
            <button>Save</button>

        </form>
    );
}
export {UserForm}