import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    ImageBackground,
    TouchableNativeFeedback
} from 'react-native'

const MealItem = (props) => {
    
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }} >
                        <ImageBackground 
                        source={{ uri: props.imageUrl }} 
                        
                        style={styles.bgImage}>
                            <View style={styles.titleContiner}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                            </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration} min</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordibility.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
styles = StyleSheet.create({
    mealItem: {
        
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10,
        
        
    },
    mealRow: {
        flexDirection: 'row',
       
    },
    mealHeader: {
        height: '85%',
         
    },
    mealDetail: {
        paddingHorizontal: 10,
        
        justifyContent: 'space-between',
        alignItems:'center',
        height:'15%'
        
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        // fontFamily:'open-sans-bold',
        fontSize:20,
        backgroundColor:'rgba(0,0,0,0.6)',
        color:'white',
        fontWeight: "bold",
        
        textAlign:'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
        
    }
})
export default MealItem;