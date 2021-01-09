/** Run command : npm run package:apps -- --configuration=shared */ 
import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Environment } from './type';

export const environment: Environment = {
  production: false,
  /** mockprovider is used to check mockdata on development environment.
   *  To check mockdata on development environment(local)
   * */
  mockProviders: [createMocksInterceptor()],
};
