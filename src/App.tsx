import { Component, createSignal, onCleanup } from 'solid-js'
import Blobfish, { BlobFishKind } from './Blobfish'
import Comp from './Comp'

const App: Component = () => {
  const [mode, setMode] = createSignal('normal' as BlobFishKind)

  function keyThing(event: KeyboardEvent) {
    if (event.type === 'keydown') {
      keys[event.key] = true
    } else if (event.type === 'keyup') {
      delete keys[event.key]
    }
    console.log(new Date().toISOString() + ' key', event.key, event.type, keys)
    
    // if (Object.keys(keys).length > 0)
    if (keys.ArrowUp) {
      setMode('up')
    } else if (keys.ArrowDown) {
      setMode('down')
    } else if (keys.ArrowLeft) {
      setMode('left')
    } else if (keys.j) {
      setMode('angry')
    } else if (keys.k) {
      setMode('happy')
    } else if (keys.l) {
      setMode('sleep')
    } else if (keys.s) {
      setMode('sad')
    } else if (keys.d) {
      setMode('dead')
    } else if (keys[' ']) {
      setMode('calm')
    } else if (keys.ArrowRight) {
      setMode('right')
    } else if (keys.o) {
      setMode('suprise')
    } else {
      setMode('normal')
    } 
  }

  let keys: {[key: string]: boolean} = {}

  document.body.addEventListener("keydown", keyThing)
  document.body.addEventListener("keyup", keyThing)

  onCleanup(() => {
    document.body.removeEventListener("keydown", keyThing)
    document.body.removeEventListener("keyup", keyThing)
  })

  function consoleSetMode(v: BlobFishKind) {
    console.log(new Date().toISOString() + 'set mode to', v);
    setMode(v)    
  }
  return (
    <>
      <h4>Blob Squad</h4>
      <div class="feature">
        <div class="epic">
          <Blobfish kind={mode()} showLabel={true} />
        </div>

      </div>
      <div class="flex-horiz flex-space-around atlas">
        <Blobfish kind="normal" showLabel on:down={(e) => consoleSetMode(e.kind)}/>
        <Blobfish kind="happy" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="angry" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="calm" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="suprise" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="sad" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="dead" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="sleep" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="up" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="down" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="left" showLabel on:down={[consoleSetMode, e.kind]} />
        <Blobfish kind="right" showLabel on:down={[consoleSetMode, e.kind]} />
      </div>
    </>
  )
}

export default App
