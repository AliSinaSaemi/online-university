import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DashboardDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);
const ContentDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './content')
);
const AnalyticsDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
);
const EcommerceDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
);
const TicketSubmissionForm = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./ticket-submission-form")
);
const Tickets = React.lazy(() =>
  import(
    /* webpackChunkName: "dashboard-ecommerce" */ "./tickets"
  )
);


const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <DashboardDefault {...props} />}
      />
      <Route
        path={`${match.url}/content`}
        render={(props) => <ContentDefault {...props} />}
      />
      <Route
        path={`${match.url}/ecommerce`}
        render={(props) => <EcommerceDefault {...props} />}
      />
      <Route
        path={`${match.url}/analytics`}
        render={(props) => <AnalyticsDefault {...props} />}
      />
      <Route
        path={`${match.url}/ticket-submission-form`}
        render={(props) => <TicketSubmissionForm {...props} />}
      />
      <Route
        path={`${match.url}/tickets`}
        render={(props) => <Tickets {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
