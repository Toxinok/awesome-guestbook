import React, { FC, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Chip, Paper, Typography } from '@mui/material'
import { SetState, Visitor, Visitors } from '../../types/main'
import TableRemove from './TableRemove'

const columns: GridColDef[] = [
	{
		field: 'fullName',
		headerName: 'Visitor',
		flex: 2,
	},
	{
		field: 'email',
		headerName: 'Email',
		flex: 4,
	},
	{
		field: 'department',
		headerName: 'Department',
		width: 150,
		headerAlign: 'right',
		align: 'right',
		flex: 1,
		renderCell: params => <Chip label={params.value} color={'default'} size={'medium'} variant={'filled'} />,
	},
]

type Props = {
	visitors: Visitors
	setVisitors: SetState<Visitors>
}

const Table: FC<Props> = ({ visitors, setVisitors }) => {
	const [selectedIds, setSelectedIds] = useState<number[]>([])
	console.log(selectedIds)

	const handleRemove = () => {
		setVisitors(prevState => prevState.filter(item => !selectedIds.includes(item.id)))
	}

	return (
		<Box sx={{ marginTop: 4, overflow: 'auto' }}>
			<Box sx={{ marginTop: 3, marginBottom: 3 }}>
				<Typography component="h1" variant="h4">
					Visitor management
				</Typography>
			</Box>

			<Box sx={{ margin: 1 }} component={Paper}>
				<DataGrid
					autoHeight
					rows={visitors}
					columns={columns}
					slots={{
						toolbar: () => <TableRemove disabled={selectedIds.length === 0} handleRemove={handleRemove} />,
					}}
					onRowSelectionModelChange={ids => setSelectedIds(ids as number[])}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 10 },
						},
					}}
					pageSizeOptions={[5, 10]}
					checkboxSelection
				/>
			</Box>
		</Box>
	)
}

export default Table
