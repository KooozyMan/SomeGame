import './ButtonStyle.css'
import Sword from './Sword.png'

export default function Button () {
    return (
        <div>
            <button className="Button"><img style={{
                width: "80px",
                height: "100px"
            }} src={Sword} alt="Sword"/></button>
        </div>
    );
}