import { CSSProperties } from 'react-jss'

export type ComponentStyleProps<K extends string> = { [x in K]: CSSProperties<{}> }