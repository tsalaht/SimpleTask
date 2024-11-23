import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Stack, Pressable, Menu, Text, Center } from "native-base";
import { Setting2 } from "iconsax-react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { setLanguage } from "../store/languageSlice";
import { RootState } from "../store/store";
import i18n from "../Locale/i18n";

const Header = () => {
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 1000);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    console.log(`Theme changed to: ${isDarkMode ? "Dark" : "Light"}`);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    const themeMessage = isDarkMode ? i18n.t("lightMode") : i18n.t("darkMode");
    showMessage(themeMessage);
  };

  const handleLanguageSwitch = (lang: string) => {
    dispatch(setLanguage(lang));
    showMessage(i18n.t("language") + `: ${lang}`);
  };

  return (
    <Stack
      width="100%"
      paddingX={8}
      paddingY={5}
      backgroundColor={isDarkMode ? "black" : "#F0F0F0"}
    >
      <Menu
        w="190px"
        bgColor={isDarkMode ? "#333333" : "#FFFFFF"}
        placement="bottom left"
        marginTop={8}
        trigger={(triggerProps) => (
          <Pressable {...triggerProps}>
            <Setting2 size="26" color="#1BA4A9" />
          </Pressable>
        )}
      >
        <Menu.Group title={i18n.t("setting")}>
          <Menu.Item onPress={handleThemeToggle}>
            {i18n.t("switchTheme")}
          </Menu.Item>
        </Menu.Group>
        <Menu.Group title={i18n.t("language")}>
          <Menu.Item onPress={() => handleLanguageSwitch("ar")}>
            العربية
          </Menu.Item>
          <Menu.Item onPress={() => handleLanguageSwitch("en")}>
            English
          </Menu.Item>
        </Menu.Group>
      </Menu>

      {message && (
        <Center
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: [{ translateX: -75 }, { translateY: -15 }] }}
          bg="black"
          px={5}
          py={2}
          rounded="md"
        >
          <Text color="white" fontSize="12" textAlign="center">
            {message}
          </Text>
        </Center>
      )}
    </Stack>
  );
};

export default Header;
