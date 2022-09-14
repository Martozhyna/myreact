import './App.css';
import SimpsonsComponent from "./components/simpsonsComponent/SimpsonsComponent";
import Persons from "./components/rick_and_mortyComponent/RickAndMortyComponent";



function App() {

    return (
        <div >
            <h2 className={'title'}>Simpsons character</h2>
            <div className='wrap' >
                <SimpsonsComponent
                itemName={'Homer Simpson'}
                info={'Homer Jay Simpson (born May 12, 1955, or 1969 or 1976 or 1983) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Homer Simpson is 39 years old.'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>

            <SimpsonsComponent
                itemName={'Bart Simpson'}
                info={'Bartholomew "Bart" Jojo Simpson (born April 1 or February 23) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie.'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

            <SimpsonsComponent
                itemName={'Marge Simpson'}
                info={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge Simpson is 36 years old. She and her husband Homer have three children: Bart, Lisa, and Maggie. '}
                pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>

            <SimpsonsComponent
                itemName={'Lisa Simpson'}
                info={'Lisa Marie Simpson (born May 9) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series. In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil\' Lisa on her parents\' 1st anniversary.'}
                pic={'https://pngimg.com/uploads/simpsons/simpsons_PNG50.png'}/>

            <SimpsonsComponent
                itemName={'Maggie Simpson'}
                info={'Margaret Evelyn Lenny "Maggie" Simpson (born December 17, 1989) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. '}
                pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>  </div>
            <div className={'cards'}>
                <h2 className={'title'}>The Rick and Morty characters</h2>
                <Persons/>

            </div>
        </div>
    );
}

export default App;
