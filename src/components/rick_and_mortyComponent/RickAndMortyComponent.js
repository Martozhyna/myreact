import {characters} from "../rickAndMortyCharacters";
import Character from "../rick_and_morty/RickAndMorty";

export default function Persons () {
    return (
        <div className={'head'}>
            {
                characters.map(user => (<Character item = {user} key = {user.id}/>))
            }
        </div>
    )
}