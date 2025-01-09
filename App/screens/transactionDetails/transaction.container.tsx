import React from 'react';
import TransactionView from './transaction.view';

function TransactionContainer(props: any): React.JSX.Element {
  return <TransactionView {...props} />;
}

export default TransactionContainer;
