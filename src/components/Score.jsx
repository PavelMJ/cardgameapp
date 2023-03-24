import React from 'react'
import Table from './Table'

export default function Score(props) {
	return (
		<div className='score conteiner'>
			<h2></h2>
			<Table playersData = {props.playersData}/>


		</div>
	)
}
