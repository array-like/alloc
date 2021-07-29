/**
 * Method that creates an allocator from an array constructor.
 *
 * @param {any} ArrayConstructor
 * @return {Function}
 */
const _calloc = (ArrayConstructor) => (n) => new ArrayConstructor(n);
export default _calloc;
