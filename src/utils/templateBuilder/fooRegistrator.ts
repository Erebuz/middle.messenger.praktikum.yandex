let count = 0

/***
 * Зарегистрируйте функцию, и используйте возвращенную строку Str в качестве вызываемой функции в событии в шаблоне textHtml.
 * Например, onclick='registrationFunction('main', () => {})'
 * @param moduleName Имя модуля для упорядоченного хранения функций
 * @param foo Объект функции
 */
export function registrationFunction(moduleName: string, foo: object) {
  console.log(foo)
  if (!window[moduleName]) window[moduleName] = {}

  const moduleSpace = window[moduleName]

  moduleSpace['foo_' + count] = foo
  const resultName = `window.${moduleName}.foo_${count}()`

  count += 1

  console.log(resultName)
  return resultName
}
