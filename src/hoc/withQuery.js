import React from 'react';
import { Query } from 'react-apollo';

const withQuery = query => WrappedComponent => () => (
  <Query query={query}>
    {
      ({ data, loading, error }) => (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error} />
      )
    }
  </Query>
);

export default withQuery;
