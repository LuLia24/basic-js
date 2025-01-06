const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((domain) => {
    const reverseDomains = domain.split('.').reverse();

    let currentItem = '';

    reverseDomains.forEach((item) => {
      currentItem = `${currentItem}.${item}`;

      if (obj[currentItem]) {
        obj[currentItem]++;
      } else {
        obj[currentItem] = 1;
      }
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
