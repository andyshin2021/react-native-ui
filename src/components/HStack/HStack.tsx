import React from "react";
import type { ReactNode } from "react";
import { StyleSheet, View, type FlexStyle } from "react-native";

type HStackProps = Omit<FlexStyle, "flexDirection"> & {
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
  children?: ReactNode;
  reverse?: boolean;
};

export const HStack = ({
  pointerEvents,
  reverse = false,
  children,
  ...props
}: HStackProps) => {
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
    flexDirection: "row",
  },
  reverse: {
    flexDirection: "row-reverse",
  },
});
