import MonsterPicture1 from './MonsterPicture1.png'
import MonsterPicture2 from './MonsterPicture2.png'

export default function ShowMonster ({monster}) {
    return (
        <div>
            <img src={monster==="Charizard" ? MonsterPicture1 : MonsterPicture2} alt={monster==="Charizard" ? "Charizard" : "Blastoise"}/>
        </div>
    );
}