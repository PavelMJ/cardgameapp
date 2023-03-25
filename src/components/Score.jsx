import React from 'react'
import Table from './Table'

export default function Score(props) {
	return (
		<div className='conteiner'>
			<div className='score'>
				<h2>The Score</h2>
				<Table playersData={props.playersData} />
			</div>
		</div>
	)
}
