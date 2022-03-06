import {LogService} from './log-service';


describe('LogService', () => {

  const spiedConsoleWarn = jest.spyOn(global.console, 'warn');
  const spiedConsoleError = jest.spyOn(global.console, 'error');

  let logger;

  beforeEach(() => {
    // https://codewithhugo.com/jest-stub-mock-spy-set-clear/
    jest.clearAllMocks();
    logger = new LogService();
  });
  afterEach(() => {
    // https://codewithhugo.com/jest-stub-mock-spy-set-clear/
    spiedConsoleWarn.mockReset();
  })

  it('LogService has been created with logging enabled.', () => {
    expect(logger.isLoggingActive).toBeTruthy();
  });

  it('should log with warning', () => {
    logger.warnMessage("Warning", {a: 3, b: "warning"});
    expect(spiedConsoleWarn).toHaveBeenCalledWith("Warning", {a: 3, b: "warning"});
  });

  it('should NOT log with warning', () => {
    logger.disableLogging();
    logger.warnMessage("Warning", {a: 3, b: "warning"});
    expect(spiedConsoleWarn).toHaveBeenCalledTimes(0)
  });

  it('should log with error', () => {
    logger.errorMessage("Error", {a: 4, b: "error"});
    expect(spiedConsoleError).toHaveBeenCalledWith("Error", {a: 4, b: "error"});
  });

  it('should NOT log with error', () => {
    logger.disableLogging();
    logger.errorMessage("Error", {a: 4, b: "error"});
    expect(spiedConsoleError).toHaveBeenCalledTimes(0)
  });

});







