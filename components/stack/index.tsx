import { Stack } from "expo-router";

export function Stacks() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    )
}