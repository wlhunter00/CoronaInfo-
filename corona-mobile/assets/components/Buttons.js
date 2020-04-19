import * as React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useStyle } from "../styles/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TouchableScale from 'react-native-touchable-scale';

export function EmbeddedPageButton({
  navigation,
  title,
  navigationName,
  navigationParams,
  icon,
  description
}) {
  const { styles, colors } = useStyle(
    "navButtonTitle",
    "navButtonDescription",
    "embeddedNavButton"
  );

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          navigationName,
          navigationParams
        );
      }}
    >
      <View style={styles.embeddedNavButton}>
        {icon}
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={styles.navButtonTitle}>{title}</Text>
          <Text style={styles.navButtonDescription}>{description}</Text>
        </View>
        <Entypo name="chevron-thin-right" color={colors.textcolor} />
      </View>
    </TouchableOpacity>
  );
}

export function PageButton({
  navigation,
  title,
  navigationName,
  navigationParams,
  icon,
  description
}) {
  const { styles, colors } = useStyle(
    "navButton",
    "navButtonTitle",
    "navButtonDescription",
    "embeddedNavButton"
  );

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate(
          navigationName,
          navigationParams
        );
      }}
      style={{ marginBottom: 15, borderRadius: 5 }}
    >
      <View style={styles.navButton}>
        {icon}
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={styles.navButtonTitle}>{title}</Text>
          <Text style={styles.navButtonDescription}>{description}</Text>
        </View>
        <Entypo name="chevron-thin-right" color={colors.textcolor} />
      </View>
    </TouchableHighlight>
  );
}

export function SiteButton({ site, navigation }) {
  const { styles, colors } = useStyle("navButton", "navButtonTitle");
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("WebView", {
          url: site.source,
          title: site.title,
          originWhiteList: site.originWhiteList
        });
      }}
      style={{ marginBottom: 15, borderRadius: 5 }}
    >
      <View style={styles.navButton}>
        <Image
          source={site.imagesrc}
          resizeMode="contain"
          style={{ width: 50, height: 50, marginRight: 20 }}
        />
        <Text style={styles.navButtonTitle}>{site.title}</Text>
        <View style={{ flex: 1 }} />
        <Entypo name="chevron-thin-right" color={colors.textcolor} />
      </View>
    </TouchableHighlight>
  );
}

export function VisitButton({ site, navigation, style }) {
  const { styles } = useStyle("actionButton", "actionButtonTitle");
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("WebView", {
          url: site.source,
          title: site.title
        });
      }}
      style={[styles.actionButton, style]}
    >
      <View>
        <Text style={styles.actionButtonTitle}>{site.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function ActionButton({ title, action, style }) {
  const { styles } = useStyle("actionButton", "actionButtonTitle");
  return (
    <TouchableOpacity onPress={action} style={[styles.actionButton, style]}>
      <View>
        <Text style={styles.actionButtonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
// A simple button that's styled like a hyperlink
export function SimpleButton({ title, action, hasChevron }) {
  const { styles, colors } = useStyle("linkButtonTitle");

  return (
    <TouchableOpacity
      onPress={action}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Text style={styles.linkButtonTitle}>{title}</Text>
      {hasChevron && (
        <Entypo
          name="chevron-thin-right"
          color={colors.primarycolor}
          size={20}
          style={{ paddingTop: 2 }}
        />
      )}
    </TouchableOpacity>
  );
}

export function ImageButton({ title, image, body, navigation }) {
  const { styles, colors } = useStyle(
    "imageButtonHeader",
    "imageButtonText",
    "imageButtonImage"
  );

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 3) / 4);
  const imageWidth = dimensions.width;

  return (
    <TouchableScale
      style={styles.imageButtonHeader}
      onPress={() => {
        navigation.navigate("ResourceTopic", {
          screen: "ResourceTopic",
          params: {
            title: title,
            image: image,
            body: body
          }
        });
      }}
      activeScale={0.96}
      tension={50}
      friction={100}
    >
      <ImageBackground
        source={image}
        style={[
          {
            width: imageWidth * 0.9,
            height: imageHeight,
            backgroundColor: colors.secondarybackgroundcolor
          },
          styles.imageButtonImage
        ]}
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          style={[{ top: imageHeight - 45 }, styles.imageButtonText]}
        >
          {title}
        </Text>
      </ImageBackground>
    </TouchableScale>
  );
}

const localStyles = StyleSheet.create({
  header: {
    padding: 0,
    marginBottom: 5,
    borderRadius: 50,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    padding: 10,
    paddingTop: 0,
    borderRadius: 5,
    marginBottom: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    position: "relative",
    left: 9,
    textShadowColor: "black",
    textShadowRadius: 2
  },
  headerImage: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 5
  }
});
