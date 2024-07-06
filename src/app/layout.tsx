import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {OpenGraph} from "next/dist/lib/metadata/types/opengraph-types";
import {Twitter} from "next/dist/lib/metadata/types/twitter-types";

const inter = Inter({ subsets: ["latin"] });

const og: OpenGraph = {
  title: "DDS2 Interactive Map",
  description: "Explore Drug Dealer Simulator 2 with our interactive map! Search items, filter stores, and find hideouts easily. Optimize your gameplay and dominate the streets with our intuitive, user-friendly interface.",
}

const twitter: Twitter = {
  title: "DDS2 Interactive Map",
  description: "Explore Drug Dealer Simulator 2 with our interactive map! Search items, filter stores, and find hideouts easily. Optimize your gameplay and dominate the streets with our intuitive, user-friendly interface.",
}

export const metadata: Metadata = {
  title: "DDS2 Interactive Map",
  description: "Explore Drug Dealer Simulator 2 with our interactive map! Search items, filter stores, and find hideouts easily. Optimize your gameplay and dominate the streets with our intuitive, user-friendly interface.",
  keywords: ["Drug Dealer Simulator 2, drug dealer, dds2, DDS2, dds, DDS, interactive map, game guide, tips, tricks, item search, store filter, hideouts, dealer spots, warehouses, shops, search, item, filter, leaflet"],
  openGraph: og,
  twitter: twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
