import React from 'react';
import useWidthPrinter from './useWidthPrinter';

export default function WidthPrinter() {
  const width = useWidthPrinter();

  return <div>{`width is ${width}`}</div>;
}
