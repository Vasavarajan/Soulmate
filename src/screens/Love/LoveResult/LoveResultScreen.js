import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import styles from './LoveResultScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircles from 'react-native-progress-circle';
import QuoteData from '../../../utils/Quote';

const {height} = Dimensions.get('window');

function LoveResultScreen(props) {
  
  const {fname, percentage, sname} = props.route.params;
  // const viewShotRef = useRef();

  const yourName = fname;
  const partnerName = sname;
  const convertPercentage = Number(percentage);

  const Quotes = () => {
    const data = QuoteData;
    const index = Math.floor(Math.random() * data.length);
    const quote = data[index].text;
    const author = data[index].author;
    return {quote, author};
  };

  const {quote, author} = Quotes();

  return (
    <LinearGradient style={styles.container} colors={['#30c5d2', '#471069']}>
      <StatusBar barStyle="default" hidden={true} />
      <SafeAreaView>
        <View style={styles.result}>
          <Text style={styles.name}>{yourName}</Text>
        </View>
        <View>
          <ProgressCircles
            percent={convertPercentage}
            radius={height * 0.075}
            borderWidth={height <= 540 ? 4 : height <= 750 ? 5 : 6}
            color={Color.PcDia}
            shadowColor={Color.PcDiaBg}
            bgColor={Color.PcCenter}>
            <Text style={styles.percentText}>{`${convertPercentage}%`}</Text>
          </ProgressCircles>
        </View>
        <View style={styles.result}>
          <Text style={styles.name}>{partnerName}</Text>
        </View>
        <View style={styles.quoteView}>
          <View style={styles.quote}>
            <Text style={styles.quoteText}>{quote}</Text>
          </View>
          <View
            style={[
              styles.quote,
              {
                alignItems: 'flex-end',
                padding: height <= 540 ? 10 : height <= 750 ? 15 : 20,
                paddingTop: height <= 540 ? 20 : height <= 750 ? 25 : 30,
              },
            ]}>
            <Text
              style={[
                styles.quoteText,
                {
                  fontSize: height <= 540 ? 14 : height <= 750 ? 16 : 19,
                },
              ]}>
              {author}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default LoveResultScreen;
