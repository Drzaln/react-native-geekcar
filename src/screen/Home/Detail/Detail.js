import React from 'react'
import { Image, StyleSheet, useWindowDimensions, StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import BackButton from '../../../components/BackButton/BackButton'
import DetailDock from '../../../components/DetailDock/DetailDock'

const Detail = ({ route, navigation }) => {
	const data = JSON.parse(route.params.data)
	const { width, height } = useWindowDimensions()
	const open = useSharedValue(false)

	const renderItem = ({ item }) => <Image source={{ uri: item.imageUrl }} style={{ height, width }} />

	return (
		<React.Fragment>
			<StatusBar backgroundColor='white' barStyle='dark-content' />
			<FlatList
				data={data.images}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				horizontal
				removeClippedSubviews={true}
				overScrollMode='never'
				decelerationRate='fast'
				pagingEnabled
			/>
			<DetailDock onPress={() => (open.value = !open.value)} animate={open} data={data} />
			<BackButton onPress={() => navigation.goBack()} animate={open} />
		</React.Fragment>
	)
}

export default Detail

const styles = StyleSheet.create({})
