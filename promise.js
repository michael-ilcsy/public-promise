/**
 * 外部からresolve,reject出来るPromiseインスタンスを返します
 * @return {Promise<any>}
 */
export const createPublicPromise = () => {
  let a, b
  let p = new Promise((resolve, reject) => {
    a = resolve
    b = reject
  })
  p.resolve = a
  p.reject = b
  return p
}
