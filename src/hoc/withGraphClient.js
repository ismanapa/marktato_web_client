import React from 'react';
import { ApolloConsumer } from 'react-apollo';

const withGraphClient = actions => WrappedComponent => (props) => {
  const newProps = Object.assign({}, props);
  const actionsIndex = Object.keys(actions);

  return (
    <ApolloConsumer>
      {(client) => {
        actionsIndex.forEach((index) => {
          const action = actions[index];
          newProps[index] = action(client);
        });
        return (
          <WrappedComponent {...newProps} client={client} />
        );
      }}
    </ApolloConsumer>
  );
};

export default withGraphClient;
