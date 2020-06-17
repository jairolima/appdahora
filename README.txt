react-native-vector-icons

For IOS add this to ios/projectname/Info.plist

<key>UIAppFonts</key>
    <array>
        <string>AntDesign.ttf</string>
        <string>Entypo.ttf</string>
        <string>EvilIcons.ttf</string>
        <string>Feather.ttf</string>
        <string>FontAwesome.ttf</string>
        <string>FontAwesome5_Brands.ttf</string>
        <string>FontAwesome5_Regular.ttf</string>
        <string>FontAwesome5_Solid.ttf</string>
        <string>Foundation.ttf</string>
        <string>Ionicons.ttf</string>
        <string>MaterialCommunityIcons.ttf</string>
        <string>MaterialIcons.ttf</string>
        <string>Octicons.ttf</string>
        <string>SimpleLineIcons.ttf</string>
        <string>Zocial.ttf</string>
    </array>



For Android: 

    Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"