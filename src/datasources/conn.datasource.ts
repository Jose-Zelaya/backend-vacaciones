import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conn',
  connector: 'mongodb',
  url: 'mongodb+srv://lizandro:Barahona123@cluster0.msdpd4r.mongodb.net/vacaciones',
  host: 'cluster0.msdpd4r.mongodb.net',
  port: 27017,
  user: 'lizandro',
  password: 'Barahona123',
  database: 'vacaciones',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conn';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
