import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import CurrencyFormatter from '../../helpers/CurrencyFormatter'
import SpecsItem from '../SpecsItem/SpecsItem'

const DetailDock = ({ onPress, animate, data }) => {
	const { width, height } = useWindowDimensions()
	const statusbar = StatusBar.currentHeight

	const absoluteStyleContainer = useAnimatedStyle(() => {
		return {
			bottom: animate.value ? withTiming(0) : withTiming(64)
		}
	})

	const containerAnimatedStyle = useAnimatedStyle(() => {
		return {
			height: animate.value ? withTiming(height) : withTiming(91),
			width: animate.value ? withTiming(width) : withTiming(width * 0.9),
			borderRadius: animate.value ? withTiming(0) : withTiming(8),
			paddingTop: animate.value ? withTiming(8 + statusbar) : withTiming(8)
		}
	})

	const animatedIconContainer = useAnimatedStyle(() => {
		return {
			transform: [ { rotate: animate.value ? withTiming('180deg') : withTiming('0deg') } ]
		}
	})

	const animatedTextStyle = useAnimatedStyle(() => {
		return {
			fontSize: animate.value ? withTiming(24) : withTiming(20),
			bottom: animate.value ? withTiming(32) : withTiming(8),
			left: animate.value ? withTiming(width * 0.53) : withTiming(16)
		}
	})

	const animatedBodyStyle = useAnimatedStyle(() => {
		return {
			opacity: animate.value ? withTiming(1) : withTiming(0)
		}
	})

	const animatedTextSection = useAnimatedStyle(() => {
		return {
			marginLeft: animate.value ? withTiming(48) : withTiming(0)
		}
	})

	return (
		<Animated.View style={[ styles.mainContainer, absoluteStyleContainer ]}>
			<Animated.View style={[ styles.container, containerAnimatedStyle ]}>
				<Pressable onPress={onPress} style={styles.headerContainer}>
					<Animated.View style={[ styles.headerTitle, animatedTextSection ]}>
						<Text style={styles.model}>{data.model}</Text>
						<Text style={styles.productionYear}>{data.productionYear}</Text>
					</Animated.View>
					<View style={styles.detailButton}>
						<Text style={styles.detailButtonTitle}>Detail</Text>
						<Animated.View style={animatedIconContainer}>
							<Icon name='chevron-up' size={18} color='#5c677d' />
						</Animated.View>
					</View>
				</Pressable>
				<Animated.View style={[ styles.bodyContainer, animatedBodyStyle ]}>
					<View style={styles.importantSpecs}>
						<ImportantSpecsItem text={`${data.usedKm} KM`} />
						<ImportantSpecsItem text={data.fuelType} />
						<ImportantSpecsItem text={data.transmissionType} />
					</View>
					<View style={styles.specsLists} />
					<ScrollView showsVerticalScrollIndicator={false}>
						<SpecsItem title='Skor Kendaraan' content={data.carScore} />
						<SpecsItem title='Tipe' content={data.carType} />
						<SpecsItem title='Plat Nomor' content={data.plateNumber} />
						<SpecsItem title='Kota' content={data.city} />
						<SpecsItem title='Lokasi Konsumen' content={data.consumerLocation} />
						<SpecsItem title='Lokasi Kendaraan' content={data.carLocation} />
						<SpecsItem title='Kapasitas Mesin' content={`${data.engineCapacity} cc`} />
						<SpecsItem title='Nomor Sasis' content={data.chassisNumber} />
						<SpecsItem title='Nomor Mesin' content={data.engineNumber} />
						<SpecsItem title='Warna' content={data.color} />
					</ScrollView>
				</Animated.View>
				<Animated.Text style={[ styles.price, animatedTextStyle ]}>
					{CurrencyFormatter(parseInt(data.expectedPrice))}
				</Animated.Text>
			</Animated.View>
		</Animated.View>
	)
}

export default DetailDock

const ImportantSpecsItem = ({ text }) => (
	<View style={styles.importantSpecItemContainer}>
		<Text style={styles.importantSpecText}>{text}</Text>
	</View>
)

const styles = StyleSheet.create({
	mainContainer: { position: 'absolute', width: '100%', alignItems: 'center' },
	container: {
		backgroundColor: 'white',
		paddingHorizontal: 16,
		paddingBottom: 8
	},
	headerContainer: { flexDirection: 'row', alignItems: 'center' },
	headerTitle: { flex: 0.7 },
	model: { fontSize: 18, fontWeight: 'bold' },
	productionYear: { color: '#5c677d' },
	detailButton: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	detailButtonTitle: { color: '#5c677d', marginRight: 8, marginBottom: 2 },
	bodyContainer: {
		marginTop: 16
	},
	importantSpecs: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	importantSpecItemContainer: {
		paddingHorizontal: 16,
		paddingVertical: 4,
		backgroundColor: '#e8e8e8',
		borderRadius: 4,
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	importantSpecText: { fontSize: 12, color: '#232323' },
	specsLists: { height: 1, backgroundColor: 'black', marginVertical: 16 },
	price: { fontWeight: 'bold', position: 'absolute' }
})
