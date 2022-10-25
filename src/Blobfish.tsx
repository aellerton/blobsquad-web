import { mergeProps, Show } from 'solid-js'

const NORMAL = String.raw`
 ___
/⋅¿⋅\<
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
/,¿,\<
`

const ANGRY = String.raw`
 ___
/*¿*\<
`

const CALM = String.raw`
 ___
/-¿-\<
`

export const BLOB_FISH = {
  'normal': NORMAL,
  'up': UP,
  'happy': HAPPY,
  'down': DOWN,
  'angry': ANGRY,
  'calm': CALM,
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
