import { mergeProps, Show } from 'solid-js'

const NORMAL = String.raw`
 ___
/⋅¿⋅\<
`
const LEFT = String.raw`
 ___
/<¿<\<
`

const RIGHT = String.raw`
 ___
/>¿>\<
`

const UP = String.raw`
 ___
/'¿'\<
`

const HAPPY = String.raw`
 ___
/^¿^\<
`

const DOWN = String.raw`
 ___
/.¿.\<
`

const ANGRY = String.raw`
 ___
/*¿*\<
`

const CALM = String.raw`
 ___
/-¿-\<
`

const SAD = String.raw`
 ___
/v¿v\<
`

const SLEEP = String.raw`
 ___
/ˇ¿ˇ\<
`

const SUPRISE = String.raw`
 ___
/o¿o\<
`

const DEAD = String.raw`
 ___
/x¿x\<
`

export const BLOB_FISH = {
  'normal': NORMAL,
  'left': LEFT,
  'up': UP,
  'happy': HAPPY,
  'down': DOWN,
  'angry': ANGRY,
  'calm': CALM,
  'sad': SAD,
  'dead': DEAD,
  'sleep': SLEEP,
  'right': RIGHT,
  'suprise': SUPRISE,
}

export type BlobFishKind = keyof typeof BLOB_FISH

// type Record<K extends string | number | symbol, T> = { [P in K]: T; }


export default (props: { kind: BlobFishKind, showLabel: boolean }) => {
  const merged = mergeProps({ showLabel: false }, props)

  return (
    <div class="flex-vert blob-fish">
      <pre class="">{BLOB_FISH[props.kind]}</pre>
      <Show when={props.showLabel}>
        <label>{props.kind}</label>
      </Show>
    </div>
  )
}
