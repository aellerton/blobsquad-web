import { mergeProps, Show } from 'solid-js'

/** remove first line */
function rfl(s: string): string {
  return s.replace(/^.*\n/, '')
}

const NORMAL = String.raw`
 ___
/⋅¿⋅\<`

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
  'normal': rfl(NORMAL),
  'left': rfl(LEFT),
  'up': rfl(UP),
  'happy': rfl(HAPPY),
  'down': rfl(DOWN),
  'angry': rfl(ANGRY),
  'calm': rfl(CALM),
  'sad': rfl(SAD),
  'dead': rfl(DEAD),
  'sleep': rfl(SLEEP),
  'right': rfl(RIGHT),
  'suprise': rfl(SUPRISE),
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
