import React from 'react'
import { StyleSheet, View } from 'react-native'

const ListLoader = () => {
	return (
		<View style={[ styles.box, { marginBottom: 16 } ]}>
			<View style={styles.horizontal}>
				<View style={styles.imageLoad} />
				<View style={styles.textSection}>
					<View style={styles.text1Load} />
					<View style={styles.text2Load} />
				</View>
			</View>
		</View>
	)
}

export default ListLoader

const styles = StyleSheet.create({
	box: { backgroundColor: 'white', borderRadius: 8, padding: 16, elevation: 3 },
	horizontal: { flexDirection: 'row' },
	textSection: { flex: 1, marginLeft: 16, justifyContent: 'space-between' },
	imageLoad: { height: 110, width: 110, borderRadius: 8, backgroundColor: 'lightgray' },
	text1Load: { height: 15, width: '40%', backgroundColor: 'lightgray' },
	text2Load: { height: 30, width: '100%', backgroundColor: 'lightgray' }
})
