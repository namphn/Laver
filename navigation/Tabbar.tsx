import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { timing, withTransition } from 'react-native-redash';
import { Value, block, onChange, set, useCode } from 'react-native-reanimated';
import Tab from './Tab';
import Particules from './Paricules';
import Weave from './Weave';
import HomeIcon from '../icons/HomeIcon';
import NotificationIcon from '../icons/NotificationIcon';
import SearchIcon from '../icons/SearchIcon';
import UserIcon from '../icons/UserIcon';
import { theme } from '../constants';

const tabs = [
  { icon: <HomeIcon /> },
  { icon: <NotificationIcon /> },
  { icon: <SearchIcon /> },
  { icon: <UserIcon /> },
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    width: theme.sizes.SEGMENT,
    height: theme.sizes.ICON_SIZE + theme.sizes.PADDING * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  const active = new Value<number>(0);
  const transition = withTransition(active, { duration: theme.sizes.DURATION });
  const activeTransition = new Value(0);
  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({ duration:theme.sizes.DURATION })),
      ]),
    [active, activeTransition]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon }, index) => (
          <View key={index} style={styles.tab}>
            <Weave {...{ active, transition, index }} />
            <Tab
              onPress={() => active.setValue(index)}
              {...{ active, transition, index }}
            >
              {icon}
            </Tab>
          </View>
        ))}
        <Particules {...{ transition, activeTransition }} />
      </View>
    </SafeAreaView>
  );
};