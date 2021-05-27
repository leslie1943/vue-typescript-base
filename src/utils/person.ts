// 定义异步执行方法
export const getPerson = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'suzhen',
        age: 19
      })
    }, 2000)
  })
}
