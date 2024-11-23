import { View } from "react-native";
import React, { useState } from "react";
import { Text } from "native-base";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Notepad2 } from "iconsax-react-native";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import Header from "./Header";
import styles from "./Styles";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useTranslation } from "react-i18next";
interface Screen {
  name: string;
  component: React.FC<any>;
  options?: BottomTabNavigationOptions;
}
const Tab = createBottomTabNavigator();

const Pages: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const { t } = useTranslation(); 
  const [focusedTab, setFocusedTab] = useState<string>("");

  const handleTabPress = (name: string) => {
    setFocusedTab(name);
  };
  const screens: Screen[] = [
    {
      name: "page one",
      component: PageOne,
      options: {
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: isDarkMode ? "black" : "white",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
          {t('pageOne')}
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <Notepad2
            width="22"
            height="22"
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            variant="Bold"
          />
        ),
      },
    },
    {
      name: "page two",
      component: PageTwo,
      options: {
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: isDarkMode ? "black" : "white",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
            {t('pageTwo')}
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <Notepad2
            width="22"
            height="22"
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            variant="Bold"
          />
        ),
      },
    },
    {
      name: "page three",
      component: PageThree,
      options: {
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: isDarkMode ? "black" : "white",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
           {t('pageThree')}
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <Notepad2
            width="22"
            height="22"
            color={props.focused ? "#1BA4A9" : "#D1D1D1"}
            variant="Bold"
          />
        ),
      },
    },
  ];
  return (
    <View
      style={[
        styles.viewContainer,
        { paddingTop: 45 },
        isDarkMode ? styles.darkBckground : styles.lightBckground,
      ]}
    >
      <Header />
      <Tab.Navigator
        initialRouteName="page one"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 50,
            backgroundColor: isDarkMode ? "black" : "white",
            borderTopWidth: 0,
          },
          tabBarLabel: () => null,
        })}
      >
        {screens.map((screen: Screen, index: number) => (
          <Tab.Screen
            key={index}
            options={screen.options}
            name={screen.name}
            component={screen.component}
            listeners={{
              tabPress: (e) => {
                handleTabPress(screen.name);
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default Pages;
