import "./index.css"
import React, { useState } from 'react';
function Moyenne() {
	const [nom, setNom] = useState('')
	const [phy, setPhy] = useState(0)
	const [math, setMath] = useState(0)
	const [franc, setFranc] = useState(0)
	const [moye, setMoye] = useState(0)
	function handleChange(e) {
		console.log(e.target.id);
		switch (e.target.id) {
			case 'nom':
				setNom(() => e.target.value);
				break;
			case 'phy':
            setPhy(() => e.target.value);
				break;
			case 'math':
            setMath(() => e.target.value);
				break;
			case 'franc':
            setFranc(() => e.target.value);
				break;
                default:
                break;
		}
	}
	function calculer() {
        let m=(parseFloat(phy)+parseFloat(math)+parseFloat(franc))/3 ;
        setMoye(()=>m.toFixed(2))
    }
	return (
		<div className='container'>
			<div>
				<h1>Calcul de la moyenne</h1>
			</div>
			<div>
				<label>Nom</label>
				<input type='text' id='nom' onChange={handleChange} />
			</div>
			<div>
				<label>Physique</label>
				<input type='text' id='phy' onChange={handleChange} />
			</div>
			<div>
				<label>Math</label>
				<input type='text' id='math' onChange={handleChange} />
			</div>
			<div>
				<label>France</label>
				<input type='text' id='franc' onChange={handleChange} />
			</div>
			<button onClick={()=>calculer()}>calculer</button>
            <p>{nom} vou aver eu en moyen {moye}</p>
            {moye<=9 && <span style={{ color:"red" }}>FAIBLE</span>}
            {(moye>9 && moye<=11) && <span style={{ color:"yellow" }}>PASSABLE</span>}
            {(moye>11 && moye<13) && <span style={{ color:"green" }}>BEIN</span>}
            {(moye>13 && moye<=16) && <span style={{ color:"blue" }}>TRES BEIN</span>}
            {moye>16 && <span style={{ color:"orange" }}>EXCELLENT</span>}
		</div>
	);
}

export default Moyenne;
