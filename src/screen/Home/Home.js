import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import useFetchData from '../../../useFetchData'
import ListItem from '../../components/ListItem/ListItem'
import ListLoader from '../../components/ListLoader/ListLoader'

const Home = ({ navigation }) => {
	const [ data, fetchMore ] = useFetchData()

	const renderItem = ({ item }) => (
		<ListItem
			item={item}
			onPress={() =>
				navigation.navigate('Detail', {
					data: JSON.stringify(item)
				})}
		/>
	)

	const separatorItem = () => <View style={styles.separator} />

	const emptyItem = () => {
		const emptyList = []

		for (let index = 0; index < 8; index++) {
			emptyList.push(<ListLoader key={index} />)
		}

		return <React.Fragment>{emptyList}</React.Fragment>
	}

	return (
		<React.Fragment>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<Text style={styles.header}>Car List</Text>
			<FlatList
				data={data}
				renderItem={renderItem}
				ItemSeparatorComponent={separatorItem}
				ListEmptyComponent={emptyItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.scroll}
				showsVerticalScrollIndicator={false}
				onEndReachedThreshold={0.9}
				onEndReached={fetchMore}
				removeClippedSubviews={true}
			/>
		</React.Fragment>
	)
}

export default Home

const styles = StyleSheet.create({
	mainContainer: { backgroundColor: '#fff' },
	header: {
		fontSize: 32,
		fontWeight: 'bold',
		backgroundColor: '#fff',
		padding: 16
	},
	scroll: { paddingBottom: 16, paddingHorizontal: 16, backgroundColor: '#fff' },
	separator: { height: 16 }
})
