import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
import { AccountDataHttpMocksProvider } from '@backbase/data-ang/account';

export const mockProviders = [
    createMocksInterceptor(),
    ProductSummaryDataHttpMocksProvider,
    AccountDataHttpMocksProvider,
];