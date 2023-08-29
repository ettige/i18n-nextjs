"use client"

import React, { createContext, useContext } from "react";
import { Dictionary } from "@/lib/get-dictionary";

const dictionaryContext = createContext<Dictionary | undefined>(undefined);

const DictionaryProvider = ({
  children,
  dictionary,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) => {
  return (
    <dictionaryContext.Provider value={dictionary}>
      {children}
    </dictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const dictionary = useContext(dictionaryContext);

  if (dictionary === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }

  return dictionary;
};

export default DictionaryProvider;
