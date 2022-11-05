import { mergeProps, Show } from 'solid-js'

/** remove first line */
function rfl(s: string): string {
  return s.replace(/^.*\n/, '')
}

const NORMAL_ORIG = String.raw`
 ___
/⋅¿⋅\<`

const NORMAL = String.raw`
 ___
/•¿•\<`

const LEFT = String.raw`
 ___
/<¿<\<`

const RIGHT = String.raw`
 ___
/>¿>\<`

const UP = String.raw`
 ___
/'¿'\<`

const HAPPY = String.raw`
 ___
/^¿^\<`

const DOWN = String.raw`
 ___
/.¿.\<`

const LOVE = String.raw`
 ___
/*¿*\<`

const CALM = String.raw`
 ___
/-¿-\<`

const SAD = String.raw`
 ___
/v¿v\<`

const SLEEP = String.raw`
 ___
/ˇ¿ˇ\<`

const SLEEP2 = String.raw`
 ___
/~¿~\<`

const SPOCK = String.raw`
 __-
/⋅¿^\<`

const SUPRISE_OROG = String.raw`
 ___
/o¿o\<`

const SUPRISE = String.raw`
 ___
/!¿!\<`

const DEAD = String.raw`
 ___
/x¿x\<`

export const BLOB_FISH = {
  'normal': rfl(NORMAL),
  'left': rfl(LEFT),
  'up': rfl(UP),
  'happy': rfl(HAPPY),
  'down': rfl(DOWN),
  'love': rfl(LOVE),
  'calm': rfl(CALM),
  'sad': rfl(SAD),
  'dead': rfl(DEAD),
  'sleep': rfl(SLEEP),
  'sleep2': rfl(SLEEP2),
  'right': rfl(RIGHT),
  'spock': rfl(SPOCK),
  'suprise': rfl(SUPRISE),
}

export type BlobFishKind = keyof typeof BLOB_FISH

export const ORDERED_BLOB_FISH: BlobFishKind[] = [
  'normal',
  'happy',
  'calm',
  'spock',
  'suprise',
  'love',
  'sad',
  'sleep',
  'sleep2',
  'dead',
  'up',
  'right',
  'down',
  'left'
]

// type Record<K extends string | number | symbol, T> = { [P in K]: T; }

export interface BlobFishProps {
  kind: BlobFishKind
  showLabel?: boolean
}

export default (props: BlobFishProps) => {
  const merged = mergeProps({ showLabel: false }, props)

  return (
    <div class="flex-vert blob-fish">
      <pre>{BLOB_FISH[props.kind]}</pre>
      <Show when={props.showLabel}>
        <label>{props.kind}</label>
      </Show>
    </div>
  )
}
