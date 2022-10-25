import type { Component } from 'solid-js';
import Blobfish from './Blobfish'
import Comp from './Comp';

const App: Component = () => {
  return (
    <>
      <h4>Blob Squad</h4>
      <div class="feature">
        <Comp />
      </div>
      <div class="flex-horiz flex-space-around atlas">
        <Blobfish kind="normal" showLabel />
        <Blobfish kind="happy" showLabel />
        <Blobfish kind="angry" showLabel />
        <Blobfish kind="calm" showLabel />
        <Blobfish kind="up" showLabel />
        <Blobfish kind="down" showLabel />
      </div>
    </>
  );
};

export default App;
