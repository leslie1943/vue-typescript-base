// 定义异步执行方法
export const makeItem = (counter: any) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: counter,
        weight: Math.floor(Math.random() * 1000),
        isEaten: false
      })
    }, 2000)
  })
}

export const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'suzhen',
        password: '111111'
      })
    }, 1000)
  })
}
