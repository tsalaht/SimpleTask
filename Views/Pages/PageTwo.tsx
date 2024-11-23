import { View, Text } from "react-native";
import React from "react";
import styles from "../Styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

const PageTwo = () => {
  const { t } = useTranslation(); 
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <View style={styles.viewContainer}>
      <View
        style={[
          styles.mainContainer,
          isDarkMode ? styles.darkBckground : styles.lightBckground,
        ]}
      >
        <Text
          style={[
            isDarkMode ? styles.darkText : styles.lightText,
            { fontSize: 20 },
          ]}
        >
          {t("pageTwo")}
        </Text>
      </View>
    </View>
  );
};

export default PageTwo;
