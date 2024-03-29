import { fetchApod } from '@api/apods';
import ApodListItem from '@components/ApodListItem';
import { Apod } from '@types';
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'

const ApodDetails = () => {

    const {date} = useLocalSearchParams();
    const [apod, setApod] = useState<Apod>(null);

    useEffect(() => {
        fetchApod(date).then((apod) => setApod(apod))
    }, [date])

    if(!apod) {
        return <ActivityIndicator />
    }

  return (
    <ScrollView>
      <ApodListItem apod={apod} />
      <Text
        style={{
          padding: 15,
          backgroundColor: "white",
          lineHeight: 22,
          fontSize: 16,
          maxWidth: 500,
          width: "100%",
          alignSelf: "center",
        }}
      >
        {apod.explanation}
      </Text>
    </ScrollView>
  );
}

export default ApodDetails

const styles = StyleSheet.create({})