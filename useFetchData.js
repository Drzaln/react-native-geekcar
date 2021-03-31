import { useCallback, useEffect, useState } from 'react'

const fetchData = async (page, size = 10) => {
	const response = await fetch(`https://gawai-code-test-8s2nj.ondigitalocean.app/cars/?size=${size}&page=${page}`)
	return response.json()
}

const useFetchData = () => {
	const [ page, setPage ] = useState(0)
	const [ shouldFetch, setShouldFetch ] = useState(true)
	const [ data, setData ] = useState([])
	const fetchMore = useCallback(() => setShouldFetch(true), [])

	useEffect(
		() => {
			if (!shouldFetch) {
				return
			}

			const fetch = async () => {
				const newData = await fetchData(page, 10)
				setShouldFetch(false)
				setData((oldData) => [ ...oldData, ...newData.cars.results ])
				setPage(page + 1)
			}

			fetch()
		},
		[ page, shouldFetch ]
	)

	return [ data, fetchMore ]
}

export default useFetchData
