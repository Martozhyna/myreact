import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {postValidator} from "../../validators";
import {postsService} from "../../services";


function PostForm ({setPosts}) {
    let {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({resolver: joiResolver(postValidator),mode: "all"});

    useEffect(() => {
        setValue('userId', '1')
       setValue ('title', 'Basic')
        setValue('body', 'Lorem ipsum')
    }, []);

    const submit = async (post) => {
        let {data} = await postsService.create(post)
        console.log(data);
        setPosts(post => [...post, data]);
        reset()
    }



    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <input type="number" placeholder={'userId'} {...register('userId', {valueAsNumber: true})}/>
            {errors.userId && <span>{errors.userId.message}</span>}
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    )
}
export {PostForm}