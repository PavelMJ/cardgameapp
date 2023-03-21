import React from 'react'

export default function Card({chosenCard}) {
	return (
		<div className='Card'>
			<div>{chosenCard()}</div>

		</div>
	)
}
