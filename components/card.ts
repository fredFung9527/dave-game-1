export type CardName = '龍' | '馬' | '蟹' | '燈' | '尾' | '車' | '貝' | '星' | '母'

export const CardNameOptions: CardName[] = ['龍', '馬', '蟹', '燈', '尾', '車', '貝', '星', '母']

export type MatrixPositionName =
  'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' |
  'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' |
  'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6'

export const TheMatrix: MatrixPositionName[][] = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
]

export type CardMatrix = Record<MatrixPositionName, CardName | null>

export const DefaultCardMatrix: CardMatrix = {
  'A1': null,
  'A2': null,
  'A3': null,
  'A4': null,
  'A5': null,
  'A6': null,
  'B1': null,
  'B2': null,
  'B3': null,
  'B4': null,
  'B5': null,
  'B6': null,
  'C1': null,
  'C2': null,
  'C3': null,
  'C4': null,
  'C5': null,
  'C6': null,
}