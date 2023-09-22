import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material'
import Table from './components/Table/Table'
import { Visitors } from './types/main'
import type {} from '@mui/x-data-grid/themeAugmentation'
import useLocalStorage from './hooks/useLocalStorage'

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#ef5742',
		},
	},
	components: {
		MuiDataGrid: {
			styleOverrides: {
				root: {
					border: 'none',
				},
			},
		},
	},
})

function App() {
	const [localStorageVisitors, setLocalStorageVisitors] = useLocalStorage('visitors', [])
	const [visitors, setVisitors] = useState<Visitors>(localStorageVisitors)

	useEffect(() => {
		setLocalStorageVisitors(visitors)
	}, [visitors])

	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />

			<Grid container component="main">
				<Grid xs={12} sm={12} md={5} lg={4} item={true}>
					<Container>
						<Form visitors={visitors} setVisitors={setVisitors} />
					</Container>
				</Grid>

				<Grid xs={12} sm={false} md={7} lg={8} item={true}>
					<Container maxWidth={false}>
						<Table visitors={visitors} setVisitors={setVisitors} />
					</Container>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
