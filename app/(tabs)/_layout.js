import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name = "index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <MaterialIcons size={30} name="home" color={color}/>
                }}
            />
            <Tabs.Screen
                name = "MediaScreen"
                options={{
                    title: 'Media',
                    tabBarIcon: ({color}) => <MaterialIcons size={30} name="play-circle" color={color}/>
                }}
            />
            <Tabs.Screen
                name = "DiscoverScreen"
                options={{
                    title: 'Discover',
                    tabBarIcon: ({color}) => <MaterialIcons size={30} name="search" color={color}/>
                }}
            />
            <Tabs.Screen
                name = "ConnectScreen"
                options={{
                    title: 'Connect',
                    tabBarIcon: ({color}) => <MaterialIcons size={30} name="supervisor-account" color={color}/>
                }}
            />
        </Tabs>
    )
}