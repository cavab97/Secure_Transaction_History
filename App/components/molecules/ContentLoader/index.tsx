import React from 'react';
import {List} from 'react-content-loader/native';
export const LoaderTypeComponent = (loader: string) => {
  switch (loader) {
    case 'list':
      return <List />;
    default:
      return <List />;
  }
};
