export const API = () => (
  <>
    <h3>API</h3>
    <APIStatusCodes />
    <APIRequestMethods />
  </>
);

export const APIStatusCodes = () => {
  return (
    <>
      <hr />
      <h3>API Status Codes</h3>
      <p>200 Ok</p>
      <p>201 Created</p>
      <p>400 Bad Request</p>
      <p>403 Forbidden</p>
      <p>404 Not Found</p>
      <p>500 Internal Error</p>
    </>
  );
};

export const APIRequestMethods = () => {
  return (
    <>
      <hr />
      <h3>Request Methods</h3>
      <p>Get</p>
      <p>POST</p>
      <p>PUT</p>
      <p>PATCH</p>
      <p>DELETE</p>
      <p>OPTIONS</p>
      <p>HEAD</p>
    </>
  );
};
