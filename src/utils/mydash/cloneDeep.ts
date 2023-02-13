export function cloneDeep<T extends object = object>(obj: T) {
  let clObj: any

  if (Array.isArray(obj)) {
    clObj = []
    for (const j in obj) {
      clObj[j] = obj[j]
    }
  } else clObj = {}

  for (const i in obj) {
    if (obj[i] instanceof Object && !Array.isArray(obj[i])) {
      clObj[i] = cloneDeep<any>(obj[i])
    } else {
      clObj[i] = obj[i]
    }
  }
  return clObj
}
