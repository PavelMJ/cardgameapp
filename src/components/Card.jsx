import React from 'react'

export default function Card({chosenCard}) {
	// let card =chosenCard()
	return (
		<div className='Card'>
			<div><img src={chosenCard.image} alt="card" /></div>

		</div>
	)
}
