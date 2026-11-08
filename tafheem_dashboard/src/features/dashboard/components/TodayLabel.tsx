"use client";

import { useSyncExternalStore } from "react";

const hijriFormat = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const weekdayFormat = new Intl.DateTimeFormat("en", { weekday: "long" });

function getLabel() {
  const now = new Date();
  const parts = hijriFormat.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value;
  return `${get("day")} ${get("month")} ${get("year")} AH · ${weekdayFormat.format(now)}`;
}

const subscribe = () => () => {};

export default function TodayLabel() {
  const label = useSyncExternalStore(subscribe, getLabel, () => "");
  return <>{label}</>;
}
