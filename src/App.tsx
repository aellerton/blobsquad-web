import { Component, createSignal, onCleanup, For } from 'solid-js'
import Blobfish, { BlobFishKind, ORDERED_BLOB_FISH } from './Blobfish'
import Comp from './Comp'

const App: Component = () => {
  const [mode, setMode] = createSignal('normal' as BlobFishKind)
  const [theme, setTheme] = createSignal('dark')

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
      setMode('love')
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

  let keys: { [key: string]: boolean } = {}

  document.body.addEventListener("keydown", keyThing)
  document.body.addEventListener("keyup", keyThing)

  onCleanup(() => {
    document.body.removeEventListener("keydown", keyThing)
    document.body.removeEventListener("keyup", keyThing)
  })

  function consoleSetMode(v: BlobFishKind) {
    console.log(new Date().toISOString() + 'set mode to', v)
    setMode(v)
  }
  function applyTheme(name: string) {
    console.log('set theme', name);
    document.body.classList.toggle('dark')
    setTheme(theme() == 'dark' ? '' : 'dark')
  }

  return (
    <>
      <nav class="lightbg">
        <h1>Blob Squad</h1>
        <div style="flex: 1 0"></div>
        <button onClick={(e) => applyTheme('dark')}>Dark</button>
      </nav>
      <div class="feature">
        <div class="epic">
          <Blobfish kind={mode()} showLabel={true} />
        </div>

      </div>
      <div class="atlas">
        <For each={ORDERED_BLOB_FISH}>{(kind, i) =>
          <button onClick={[consoleSetMode, kind]}>{kind}</button>
        }
        </For>
      </div>
    </>
  )
}

export default App
