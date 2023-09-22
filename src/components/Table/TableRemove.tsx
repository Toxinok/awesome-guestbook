import React, { FC } from 'react'
import { Button, Checkbox, Container, Toolbar } from '@mui/material'

type Props = {
	disabled: boolean
	handleRemove: () => void
}

const TableRemove: FC<Props> = ({ disabled, handleRemove }) => {
	return (
		<Toolbar style={{ paddingLeft: 15 }}>
			<Button color={'error'} variant="contained" disabled={disabled} onClick={handleRemove}>
				Remove
			</Button>
		</Toolbar>
	)
}

export default TableRemove
