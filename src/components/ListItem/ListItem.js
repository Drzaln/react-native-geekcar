import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CurrencyFormatter from '../../helpers/CurrencyFormatter'
import Box from '../Box/Box'

const ListItem = ({ item, onPress }) => {
	return (
		<Box onPress={onPress}>
			<View style={styles.horizontal}>
				<Image source={{ uri: item.images[0].imageUrl }} style={styles.image} />
				<View style={styles.textSection}>
					<View>
						<Text style={styles.model}>{item.model}</Text>
						<Text style={styles.brand}>{item.brand}</Text>
						<Text style={styles.year}>{item.productionYear}</Text>
					</View>
					<Text style={styles.price}>{CurrencyFormatter(parseInt(item.expectedPrice))}</Text>
				</View>
			</View>
		</Box>
	)
}

export default ListItem

const styles = StyleSheet.create({
	image: { height: 110, width: 110, borderRadius: 8 },
	horizontal: { flexDirection: 'row' },
	textSection: { flex: 1, marginLeft: 16, justifyContent: 'space-between' },
	price: { fontSize: 24, fontWeight: 'bold' },
	model: { fontSize: 16, fontWeight: 'bold', lineHeight: 24 },
	brand: { color: '#5c677d', lineHeight: 20 },
	year: { color: '#5c677d', lineHeight: 20 }
})
