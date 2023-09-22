import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

type Props = {}

const Header: FC<Props> = ({}) => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					Application
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
