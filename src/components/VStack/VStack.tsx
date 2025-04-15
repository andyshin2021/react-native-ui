import type { ReactNode } from "react";
import React from "react";
import { StyleSheet, View, type FlexStyle } from "react-native";

type VStackProps = Omit<FlexStyle, "flexDirection"> & {
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
  children?: ReactNode;
  reverse?: boolean;
};

export const VStack = ({
  pointerEvents,
  reverse = false,
  children,
  ...props
}: VStackProps) => {
  return (
    <View
      {...props}
      style={[reverse ? styles.reverse : styles.normal]}
      pointerEvents={pointerEvents}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  normal: {
    flexDirection: "column",
  },
  reverse: {
    flexDirection: "column-reverse",
  },
});
