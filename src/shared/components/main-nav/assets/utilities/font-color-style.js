import React from 'react';

const colorStyle = (colorTheme) => colorTheme === "dark" ? "#000" : "#FFF";

const borderBottomStyle = (link, mainUrl) => link === mainUrl ? ["1px solid", "0.25rem"] : [];

export const getStyle = (args) => ((args.mainUrl && args.mainUrl !== null) && args.link)  ?
    {
      color: colorStyle(args.colorTheme),
      borderBottom: borderBottomStyle(args.link, args.mainUrl)[0],
      paddingBottom: borderBottomStyle(args.link, args.mainUrl)[1]
    }
  :
    {
      color: colorStyle(args.colorTheme)
    }
  ;
