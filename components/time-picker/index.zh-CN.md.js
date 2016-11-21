webpackJsonp([116,202],{

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "时间选择框",
	    "type": "Data Entry",
	    "title": "TimePicker",
	    "filename": "components/time-picker/index.zh-CN.md"
	  },
	  "description": ["section", ["p", "输入或选择时间的控件。"], ["h2", "何时使用"]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["hr"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> moment <span class=\"token keyword\" >from</span> <span class=\"token string\" >'moment'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TimePicker</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >moment</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'13:30:56'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'HH:mm:ss'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />"]], ["blockquote", ["p", "注意：", ["code", "0.11+"], " 后 ", ["code", "Timepicker"], " 改名为 ", ["code", "TimePicker"], "。"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "defaultValue"], ["td", "默认时间"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "value"], ["td", "当前时间"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "placeholder"], ["td", "没有值的时候显示的内容"], ["td", "string"], ["td", "\"请选择时间\""]], ["tr", ["td", "onChange"], ["td", "时间发生变化的回调"], ["td", "function(time: moment, timeString: string): void"], ["td", "无"]], ["tr", ["td", "format"], ["td", "展示的时间格式"], ["td", "string"], ["td", "\"HH:mm:ss\"、\"HH:mm\"、\"mm:ss\""]], ["tr", ["td", "disabled"], ["td", "禁用全部操作"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "disabledHours"], ["td", "禁止选择部分小时选项"], ["td", "function()"], ["td", "无"]], ["tr", ["td", "disabledMinutes"], ["td", "禁止选择部分分钟选项"], ["td", "function(selectedHour)"], ["td", "无"]], ["tr", ["td", "disabledSeconds"], ["td", "禁止选择部分秒选项"], ["td", "function(selectedHour, selectedMinute)"], ["td", "无"]], ["tr", ["td", "hideDisabledOptions"], ["td", "隐藏禁止选择的选项"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "getPopupContainer"], ["td", "定义浮层的容器，默认为 body 上新建 div"], ["td", "function(trigger)"], ["td", "无"]], ["tr", ["td", "addon"], ["td", "选择框底部显示自定义的内容"], ["td", "function"], ["td", "无"]]]], ["style", ".code-box-demo .ant-time-picker { margin: 0 8px 12px 0; }"]]
	};

/***/ }

});