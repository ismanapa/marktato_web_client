import React from 'react';
import { Query } from 'react-apollo';

const withQuery = query => WrappedComponent => props => (
  <Query query={query}>
    {
      ({ data, loading, error }) => (
        <WrappedComponent
          {...props}
          data={data}
          loading={loading}
          error={error} />
      )
    }
  </Query>
);

export default withQuery;
