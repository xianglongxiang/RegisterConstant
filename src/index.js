'use strict';

/**
 * 定义项目常量
 * 要求常量名称字母必须大写，用下划线分隔
 */

let Constant = {};

/** environment **/
define('ENV_DEV'     , 1);
defined('ENV_TEST')    || define('ENV_TEST'    , 2);
defined('ENV_PRE')     || define('ENV_PRE'     , 3);
defined('ENV_DEMO')    || define('ENV_DEMO'    , 4);
defined('ENV_RELEASE') || define('ENV_RELEASE' , 5);

/** session **/
defined('S_OPEN_ID')     || define('S_OPEN_ID'     , 'openid');
defined('S_USER_ID')     || define('S_USER_ID'     , 'userid');
defined('S_CAR_ID')      || define('S_CAR_ID'      , 'carid');
defined('S_OPEN_TOKEN')      || define('S_OPEN_TOKEN'      , 'token');

/**
 * 定义常量
 * @param {String} name 常量名
 * @param {Mixed} value 常量值
 */
function define(name, value) {
	if (defined(name)) {
		return;
	}
	Object.defineProperty(Constant, name, {
		value: value,
		enumerable: true,
		writable: false,
		configurable: true
	});
}

/**
 * 判断常量是否已定义
 * @param {String} name 常量名
 * @return {Boolean} 
 */
function defined(name) {
	return name in Constant;
}

module.exports = Constant;
