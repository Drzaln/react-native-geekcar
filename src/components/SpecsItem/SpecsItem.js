import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SpecsItem = ({ title, content }) => (
	<View style={styles.container}>
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
		<View style={styles.contentContainer}>
			<Text>{content}</Text>
		</View>
	</View>
)

export default SpecsItem

const styles = StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
	titleContainer: { flex: 0.3 },
	title: { fontWeight: 'bold', lineHeight: 20 },
	contentContainer: { flex: 0.7, marginLeft: 16 }
})
