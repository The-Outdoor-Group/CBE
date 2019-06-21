import React from 'react';

export const colorStyle = (colorTheme) => colorTheme === "dark" ? "#000" : "#FFF";

export const borderBottomStyle = (link, mainUrl) => link === mainUrl ? ["1px solid", "0.25rem"] : [];
