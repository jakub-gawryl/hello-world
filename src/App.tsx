import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const App: FC<Props> = () => {
  return (
    <div id="hello-world-wrapper">
      <h1>Hello world 👋</h1>
    </div>
  );
};

export { App };
