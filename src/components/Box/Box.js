import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

const Box = ({ children, onPress }) => {
	return (
		<Pressable onPress={onPress} disabled={onPress ? false : true} style={styles.box}>
			{children}
		</Pressable>
	)
}

export default Box

const styles = StyleSheet.create({
	box: { backgroundColor: 'white', borderRadius: 8, padding: 16, elevation: 3 }
})
