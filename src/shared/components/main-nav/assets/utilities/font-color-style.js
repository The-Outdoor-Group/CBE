import React from 'react';

const colorStyle = (colorTheme) => colorTheme === "dark" ? "#000" : "#FFF";

const borderBottomStyle = (link, mainUrl) => link === mainUrl ? ["1px solid", "0.25rem"] : [];

export const getStyle = (args) => {

  // if mobile
  if (args.mobileLayout) {
    // if mobile and active
    if ( (args.mainUrl && args.mainUrl !== null) && (args.link === args.mainUrl) ) {
      return {
        background: '#ccc',
        padding: '1rem',
        color: '000'
      };
    } else {
      return { color: '#000' };
    }
  }
  // not mobile
  else {
    // not mobile and active
    if ( (args.mainUrl && args.mainUrl !== null) && (args.link === args.mainUrl) ) {
      return {
          color: colorStyle(args.colorTheme),
          borderBottom: borderBottomStyle(args.link, args.mainUrl)[0],
          paddingBottom: borderBottomStyle(args.link, args.mainUrl)[1]
        };
    } else {
      return {
        color: colorStyle(args.colorTheme)
      };
    }
  }
};
