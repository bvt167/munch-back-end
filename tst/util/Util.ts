/**
 * Utility functions for testing.
 */

export const getMockResponse: any = () => {
  const res: any = {};
  res.status = jest.fn(status => {
    res.statusValue = status;
    return res;
  });
  res.json = jest.fn(json => {
    res.jsonValue = json;
    return res;
  });
  return res;
}
