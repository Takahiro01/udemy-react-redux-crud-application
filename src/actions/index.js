export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


// アクションクリエーター： アクションを返す関数
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

