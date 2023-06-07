import "./index.css"
import React, { useEffect, useState } from 'react';
function Moyenne() {
	const [nom, setNom] = useState('')
	const [phy, setPhy] = useState()
	const [math, setMath] = useState()
	const [franc, setFranc] = useState()
	const [moye, setMoye] = useState(0)
	
	function calculer() {
		let m = (parseFloat(phy) + parseFloat(math) + parseFloat(franc)) / 3;
		setMoye(() => m.toFixed(2))
	}
	useEffect(()=>{
		calculer()
	},[phy,math,franc,moye])
	return (
		<div className='container'>
			<div>
				<h1>Calcul de la moyenne</h1>
			</div>
			<div>
				<label>Nom</label>
				<input type='text' id='nom' value={nom} onChange={(e)=>setNom(e.target.value)} />
			</div>
			<div>
				<label>Physique</label>
				<input type='text' id='phy' value={phy} onChange={(e)=>setPhy(e.target.value)}/>
			</div>
			<div>
				<label>Math</label>
				<input type='text' id='math' value={math} onChange={(e)=>setMath(e.target.value)}/>
			</div>
			<div>
				<label>France</label>
				<input type='text' id='franc' value={franc} onChange={(e)=>setFranc(e.target.value)}/>
			</div>
			<button onClick={() => calculer()}>calculer</button>
			<p>{nom} vou aver eu en moyen {moye}</p>
			{moye <= 9 && <span style={{ color: "red" }}>FAIBLE</span>}
			{(moye > 9 && moye <= 11) && <span style={{ color: "yellow" }}>PASSABLE</span>}
			{(moye > 11 && moye < 13) && <span style={{ color: "green" }}>BEIN</span>}
			{(moye > 13 && moye <= 16) && <span style={{ color: "blue" }}>TRES BEIN</span>}
			{moye > 16 && <span style={{ color: "orange" }}>EXCELLENT</span>}
		</div>
	);
}

export default Moyenne;
