export const GITCICD = () => (
  <>
    <h3>GIT / Continous Integration / Continous Deployment</h3>
    <GitCommands />
    <CI />
    <CD />
  </>
);

export const GitCommands = () => {
  return (
    <>
      <hr />
      <h3>Git Commands</h3>
      <p>git clone</p>
      <p>git add .</p>
      <p>git commit -m "inital message"</p>
      <p>git push -u origin main</p>
      <p>git pull</p>
      <p>git merge</p>
      <p>git fetch</p>
      <p>git status</p>
      <p>git stash</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </>
  );
};

export const CI = () => {
  return (
    <>
      <hr />
      <h3>Continous Integration</h3>
    </>
  );
};

export const CD = () => {
  return (
    <>
      <hr />
      <h3>Continous Deployment</h3>
    </>
  );
};
