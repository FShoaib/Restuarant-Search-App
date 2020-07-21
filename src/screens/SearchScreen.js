import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () =>{
    [term, setTerm] = useState('')
    [results, setResults] = useState('')
    return <View>
        <SearchBar 
        term = {term} 
        onTermChange = {(newTerm)=> setTerm(newTerm)}
        onTermSubmit = {()=> console.log('term submitted')}/>
        <Text>Search Screen</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default SearchScreen;