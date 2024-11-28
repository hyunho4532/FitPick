import { Stack } from "expo-router";

export function Stacks() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(pages)/login/[oauth]" />
            <Stack.Screen name="+not-found" />
        </Stack>
    )
}