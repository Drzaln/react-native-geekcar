import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'

const BackButton = ({ onPress, animate }) => {
	const animatedBackStyle = useAnimatedStyle(() => {
		return {
			paddingVertical: animate.value ? withTiming(0) : withTiming(8),
			paddingHorizontal: animate.value ? withTiming(0) : withTiming(9)
		}
	})
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Animated.View style={[ styles.iconContainer, animatedBackStyle ]}>
				<Icon name='chevron-back' size={24} color='#000' />
			</Animated.View>
		</Pressable>
	)
}

export default BackButton

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 16,
		left: 16
	},
	iconContainer: {
		backgroundColor: 'white',
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
