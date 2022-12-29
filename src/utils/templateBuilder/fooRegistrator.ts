declare global {
  interface Window {
    foo: any
  }
}

let count = 0

/***
 * Зарегистрируйте функцию, и используйте возвращенную строку Str в качестве вызываемой функции в событии в шаблоне textHtml.
 * Например, onclick='registrationFunction('main', () => {})'
 * @param moduleName Имя модуля для упорядоченного хранения функций
 * @param foo Объект функции
 */
export function registrationFunction(moduleName: string, foo: object) {
  if (!window.foo) {
    window.foo = {}
  }
  if (!window.foo[moduleName]) {
    window.foo[moduleName] = {}
  }

  const moduleSpace = window.foo[moduleName]

  moduleSpace['foo_' + count] = foo
  const resultName = `window.foo.${moduleName}.foo_${count}()`

  count += 1

  return resultName
}
