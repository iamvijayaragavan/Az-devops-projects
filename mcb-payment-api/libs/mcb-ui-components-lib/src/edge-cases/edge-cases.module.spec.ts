import { EdgeCasesModule } from './edge-cases.module';

describe('EdgeCasesModule', () => {
  let edgeCasesModule: EdgeCasesModule;

  beforeEach(() => {
    edgeCasesModule = new EdgeCasesModule();
  });

  it('should create an instance', () => {
    expect(edgeCasesModule).toBeTruthy();
  });
});
