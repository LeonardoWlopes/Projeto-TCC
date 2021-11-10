import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import Dashboard from "./src/screens/Dashboard";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Dashboard />
    </>
  );
}

