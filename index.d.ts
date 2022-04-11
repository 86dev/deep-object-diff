export function diff(originalObj: any, updatedObj: any): any
export function diff<T>(originalObj: T, updatedObj: T): Partial<T>
export function diff<T, U>(originalObj: T, updatedObj: U): Partial<T & U>

export function addedDiff(originalObj: any, updatedObj: any): any
export function addedDiff<T>(originalObj: T, updatedObj: T): Partial<T>
export function addedDiff<T, U>(originalObj: T, updatedObj: U): Partial<T & U>

export function deletedDiff(originalObj: any, updatedObj: any): any
export function deletedDiff<T>(originalObj: T, updatedObj: T): Partial<T>
export function deletedDiff<T, U>(originalObj: T, updatedObj: U): Partial<T & U>

export function updatedDiff(originalObj: any, updatedObj: any): any
export function updatedDiff<T>(originalObj: T, updatedObj: T): Partial<T>
export function updatedDiff<T, U>(originalObj: T, updatedObj: U): Partial<T & U>

export interface DetailedDiff<T> {
	added: Partial<T>
	deleted: Partial<T>
	updated: Partial<T>
}

export function detailedDiff(originalObj: any, updatedObj: any): DetailedDiff<any>
export function detailedDiff<T>(originalObj: T, updatedObj: T): DetailedDiff<T>
export function detailedDiff<T, U>(originalObj: T, updatedObj: U): DetailedDiff<T & U>
