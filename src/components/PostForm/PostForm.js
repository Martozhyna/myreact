import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {postValidator} from "../../validators";
import {postsService} from "../../services";


function PostForm ({setPosts,postForUpdate,setPostForUpdate}) {
    let {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({resolver: joiResolver(postValidator),mode: "all"});

    useEffect(() => {
        if (postForUpdate){
            setValue('userId', postForUpdate.userId, {shouldValidate: true})
            setValue ('title', postForUpdate.title,{shouldValidate: true})
            setValue('body', postForUpdate.body,{shouldValidate: true})
        }

    }, [postForUpdate,setValue]);

    const submit = async (post) => {
        if (postForUpdate) {
            let {data} = await postsService.updateById(postForUpdate.id, post);
            setPosts((posts) => {
                let findPost = posts.find(value => value.id === postForUpdate.id);
                Object.assign(findPost, data);
                setPostForUpdate(null);
                return [...posts]
            })
        } else {
            let {data} = await postsService.create(post);
            console.log(data);
            setPosts(post => [...post, data]);
        }
        reset()
    };



    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <input type="number" placeholder={'userId'} {...register('userId', {valueAsNumber: true})}/>
            {errors.userId && <span>{errors.userId.message}</span>}
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button disabled={!isValid}>{postForUpdate ? 'Update':'Save'}</button>
        </form>
    )
}
export {PostForm}