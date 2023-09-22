import { DEPARTMENTS } from '../constants/main'
import { Dispatch, SetStateAction } from 'react'

export type SetState<T> = Dispatch<SetStateAction<T>>

export type DepartmentType = (typeof DEPARTMENTS)[number]

export type Visitor = {
	id: number
	fullName: string
	email: string
	department: DepartmentType
}

export type Visitors = Visitor[]
