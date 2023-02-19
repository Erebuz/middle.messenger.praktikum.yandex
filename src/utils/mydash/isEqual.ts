function isObject(obj: any) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

function isEqual(a: object, b: object): boolean {
  let result = true

  for (const key in a) {
    if (isObject(a[key as keyof object])) {
      result = result && isEqual(a[key as keyof object], b[key as keyof object])
    } else if (Array.isArray(a[key as keyof object])) {
      if (!Array.isArray(b[key as keyof object])) return false

      if (
        (a[key as keyof object] as any[]).length !==
        (b[key as keyof object] as any[]).length
      )
        return false

      for (const i in a[key as keyof object] as any[]) {
        if (a[key as keyof object][i] !== b[key as keyof object][i])
          return false
      }
      return true
    } else {
      result = result && a[key as keyof object] === b[key as keyof object]
    }
  }

  return result
}

export default isEqual
