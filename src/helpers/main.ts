import { Visitors } from '../types/main'

const LOCAL_STORAGE_TABLE_KEY = 'table-data'

export const tableLocalStorageMethods = {
	get: () => {
		const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)
		return data ? (JSON.parse(data) as Visitors) : null
	},

	// initialSet: ({ data }: { data: Visitors }) => {
	// 	const localStorageData = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)
	//
	// 	if (!localStorageData) {
	// 		const reformattedData: TableLocalStorageItems = data.map(item => ({
	// 			id: item.id,
	// 			checked: false,
	// 			notes: '',
	// 		}))
	//
	// 		localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(reformattedData))
	// 	}
	// },

	set: ({
		id,
		key,
		value,
	}: { id: number } & ({ key: 'checkbox'; value: boolean } | { key: 'notes'; value: string })) => {
		const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)
		const parsedData = data ? (JSON.parse(data) as Visitors) : null

		// if (parsedData) {
		// 	const editedParsedData: Visitors = parsedData.map(item => ({
		// 		id: item.id,
		// 		checked: item.id === id && key === 'checkbox' ? value : item.checked,
		// 		notes: item.id === id && key === 'notes' ? value : item.notes,
		// 	}))
		//
		// 	return localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(editedParsedData))
		// }
	},

	find: ({ id }: { id: number }) => {
		const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)

		if (data) {
			const parsedData = JSON.parse(data) as Visitors
			return parsedData.find(item => item.id === id)
		}
	},
}
