!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var o=n();for(var t in o)("object"==typeof exports?exports:e)[t]=o[t]}}(window,(function(){return function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./examples/_shared/locales/examples.locale.En.js")}({"../Core/lib/Core/localization/En.js":
/*!*******************************************!*\
  !*** ../Core/lib/Core/localization/En.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar localeName = 'En',\n    localeDesc = 'English',\n    locale = {\n  localeName: localeName,\n  localeDesc: localeDesc,\n  // Translations for common words and phrases which are used by all classes.\n  Object: {\n    Yes: 'Yes',\n    No: 'No',\n    Cancel: 'Cancel'\n  },\n  //region Widgets\n  Combo: {\n    noResults: 'No results'\n  },\n  FilePicker: {\n    file: 'File'\n  },\n  Field: {\n    // native input ValidityState statuses\n    badInput: 'Invalid field value',\n    patternMismatch: 'Value should match a specific pattern',\n    rangeOverflow: function rangeOverflow(value) {\n      return \"Value must be less than or equal to \".concat(value.max);\n    },\n    rangeUnderflow: function rangeUnderflow(value) {\n      return \"Value must be greater than or equal to \".concat(value.min);\n    },\n    stepMismatch: 'Value should fit the step',\n    tooLong: 'Value should be shorter',\n    tooShort: 'Value should be longer',\n    typeMismatch: 'Value is required to be in a special format',\n    valueMissing: 'This field is required',\n    invalidValue: 'Invalid field value',\n    minimumValueViolation: 'Minimum value violation',\n    maximumValueViolation: 'Maximum value violation',\n    fieldRequired: 'This field is required',\n    validateFilter: 'Value must be selected from the list'\n  },\n  DateField: {\n    invalidDate: 'Invalid date input'\n  },\n  NumberFormat: {\n    locale: 'en-US',\n    currency: 'USD'\n  },\n  TimeField: {\n    invalidTime: 'Invalid time input'\n  },\n  List: {\n    loading: 'Loading...'\n  },\n  PagingToolbar: {\n    firstPage: 'Go to first page',\n    prevPage: 'Go to previous page',\n    page: 'Page',\n    nextPage: 'Go to next page',\n    lastPage: 'Go to last page',\n    reload: 'Reload current page',\n    noRecords: 'No records to display',\n    pageCountTemplate: function pageCountTemplate(data) {\n      return \"of \".concat(data.lastPage);\n    },\n    summaryTemplate: function summaryTemplate(data) {\n      return \"Displaying records \".concat(data.start, \" - \").concat(data.end, \" of \").concat(data.allCount);\n    }\n  },\n  //endregion\n  //region Others\n  DateHelper: {\n    locale: 'en-US',\n    weekStartDay: 0,\n    unitNames: [{\n      single: 'millisecond',\n      plural: 'ms',\n      abbrev: 'ms'\n    }, {\n      single: 'second',\n      plural: 'seconds',\n      abbrev: 's'\n    }, {\n      single: 'minute',\n      plural: 'minutes',\n      abbrev: 'min'\n    }, {\n      single: 'hour',\n      plural: 'hours',\n      abbrev: 'h'\n    }, {\n      single: 'day',\n      plural: 'days',\n      abbrev: 'd'\n    }, {\n      single: 'week',\n      plural: 'weeks',\n      abbrev: 'w'\n    }, {\n      single: 'month',\n      plural: 'months',\n      abbrev: 'mon'\n    }, {\n      single: 'quarter',\n      plural: 'quarters',\n      abbrev: 'q'\n    }, {\n      single: 'year',\n      plural: 'years',\n      abbrev: 'yr'\n    }],\n    // Used to build a RegExp for parsing time units.\n    // The full names from above are added into the generated Regexp.\n    // So you may type \"2 w\" or \"2 wk\" or \"2 week\" or \"2 weeks\" into a DurationField.\n    // When generating its display value though, it uses the full localized names above.\n    unitAbbreviations: [['mil'], ['s', 'sec'], ['m', 'min'], ['h', 'hr'], ['d'], ['w', 'wk'], ['mo', 'mon', 'mnt'], ['q', 'quar', 'qrt'], ['y', 'yr']],\n    parsers: {\n      L: 'MM/DD/YYYY',\n      LT: 'HH:mm A'\n    },\n    ordinalSuffix: function ordinalSuffix(number) {\n      return number + ({\n        1: 'st',\n        2: 'nd',\n        3: 'rd'\n      }[number[number.length - 1]] || 'th');\n    }\n  } //endregion\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/En.js?")},"../Core/lib/Core/localization/LocaleHelper.js":
/*!*****************************************************!*\
  !*** ../Core/lib/Core/localization/LocaleHelper.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleHelper; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @module Core/localization/LocaleHelper\n */\n\n/**\n * Provides locale management methods.\n */\nvar LocaleHelper = /*#__PURE__*/function () {\n  function LocaleHelper() {\n    _classCallCheck(this, LocaleHelper);\n  }\n\n  _createClass(LocaleHelper, null, [{\n    key: "mergeLocales",\n\n    /**\n     * Merges all properties of provided locales into new locale.\n     * Locales are merged in order they provided and locales wich go later replace same properties of previous locales.\n     * @param {...Object} locales Locales to merge\n     * @return {Object} Merged locale\n     */\n    value: function mergeLocales() {\n      var result = {};\n\n      for (var _len = arguments.length, locales = new Array(_len), _key = 0; _key < _len; _key++) {\n        locales[_key] = arguments[_key];\n      }\n\n      locales.forEach(function (locale) {\n        Object.keys(locale).forEach(function (key) {\n          if (_typeof(locale[key]) === \'object\') {\n            result[key] = _objectSpread(_objectSpread({}, result[key]), locale[key]);\n          } else {\n            result[key] = locale[key];\n          }\n        });\n      });\n      return result;\n    }\n    /**\n     * Removes all properties from `locale` that are present in the provided `trimLocale`.\n     * @param {Object} locale locales to merge\n     * @param {Object} trimLocale locales to merge\n     */\n\n  }, {\n    key: "trimLocale",\n    value: function trimLocale(locale, _trimLocale) {\n      var remove = function remove(key, subKey) {\n        if (!locale[key]) {\n          throw new Error("Key \\"".concat(key, "\\" doesn\'t exist in locale"));\n        }\n\n        if (subKey) {\n          if (!locale[key][subKey]) {\n            throw new Error("SubKey \\"".concat(key, ".").concat(subKey, "\\" doesn\'t exist in locale"));\n          }\n\n          delete locale[key][subKey];\n        } else {\n          delete locale[key];\n        }\n      };\n\n      Object.keys(_trimLocale).forEach(function (key) {\n        if (Array.isArray(_trimLocale[key])) {\n          _trimLocale[key].forEach(function (subKey) {\n            return remove(key, subKey);\n          });\n        } else {\n          remove(key);\n        }\n      });\n    }\n    /**\n     * Put the locale under `window.bryntum.locales` to make sure it can be discovered automatically\n     * @param {String} localeName Locale name\n     * @param {Object} config Locale config\n     */\n\n  }, {\n    key: "publishLocale",\n    value: function publishLocale(localeName, config) {\n      var bryntum = window.bryntum = window.bryntum || {},\n          locales = bryntum.locales = bryntum.locales || {}; // Avoid registering locales twice\n\n      locales[localeName] = !locales[localeName] ? config : this.mergeLocales(locales[localeName], config);\n    }\n  }]);\n\n  return LocaleHelper;\n}();\n\n\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/LocaleHelper.js?')},"../Grid/lib/Grid/localization/En.js":
/*!*******************************************!*\
  !*** ../Grid/lib/Grid/localization/En.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/localization/En.js */ \"../Core/lib/Core/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Core_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  //region Features\n  ColumnPicker: {\n    column: 'Column',\n    columnsMenu: 'Columns',\n    hideColumn: 'Hide column',\n    hideColumnShort: 'Hide'\n  },\n  Filter: {\n    applyFilter: 'Apply filter',\n    filter: 'Filter',\n    editFilter: 'Edit filter',\n    on: 'On',\n    before: 'Before',\n    after: 'After',\n    equals: 'Equals',\n    lessThan: 'Less than',\n    moreThan: 'More than',\n    removeFilter: 'Remove filter'\n  },\n  FilterBar: {\n    enableFilterBar: 'Show filter bar',\n    disableFilterBar: 'Hide filter bar'\n  },\n  Group: {\n    group: 'Group',\n    groupAscending: 'Group ascending',\n    groupDescending: 'Group descending',\n    groupAscendingShort: 'Ascending',\n    groupDescendingShort: 'Descending',\n    stopGrouping: 'Stop grouping',\n    stopGroupingShort: 'Stop'\n  },\n  Search: {\n    searchForValue: 'Search for value'\n  },\n  Sort: {\n    sort: 'Sort',\n    sortAscending: 'Sort ascending',\n    sortDescending: 'Sort descending',\n    multiSort: 'Multi sort',\n    removeSorter: 'Remove sorter',\n    addSortAscending: 'Add ascending sorter',\n    addSortDescending: 'Add descending sorter',\n    toggleSortAscending: 'Change to ascending',\n    toggleSortDescending: 'Change to descending',\n    sortAscendingShort: 'Ascending',\n    sortDescendingShort: 'Descending',\n    removeSorterShort: 'Remove',\n    addSortAscendingShort: '+ Ascending',\n    addSortDescendingShort: '+ Descending'\n  },\n  //endregion\n  //region Grid\n  GridBase: {\n    loadFailedMessage: 'Data loading failed!',\n    syncFailedMessage: 'Data synchronization failed!',\n    unspecifiedFailure: 'Unspecified failure',\n    networkFailure: 'Network error',\n    parseFailure: 'Failed to parse server response',\n    loadMask: 'Loading...',\n    syncMask: 'Saving changes, please wait...',\n    noRows: 'No records to display',\n    moveColumnLeft: 'Move to left section',\n    moveColumnRight: 'Move to right section',\n    removeRow: 'Delete record',\n    removeRows: 'Delete records',\n    moveColumnTo: function moveColumnTo(region) {\n      return \"Move column to \".concat(region);\n    }\n  },\n  CellMenu: {\n    removeRow: 'Delete record',\n    removeRows: 'Delete records'\n  },\n  //endregion\n  //region Export\n  PdfExport: {\n    'Waiting for response from server': 'Waiting for response from server...',\n    'Export failed': 'Export failed',\n    'Server error': 'Server error',\n    'Generating pages': 'Generating pages...'\n  },\n  ExportDialog: {\n    width: '40em',\n    labelWidth: '12em',\n    exportSettings: 'Export settings',\n    \"export\": 'Export',\n    exporterType: 'Control pagination',\n    cancel: 'Cancel',\n    fileFormat: 'File format',\n    rows: 'Rows',\n    alignRows: 'Align rows',\n    columns: 'Columns',\n    paperFormat: 'Paper format',\n    orientation: 'Orientation',\n    repeatHeader: 'Repeat header'\n  },\n  ExportRowsCombo: {\n    all: 'All rows',\n    visible: 'Visible rows'\n  },\n  ExportOrientationCombo: {\n    portrait: 'Portrait',\n    landscape: 'Landscape'\n  },\n  SinglePageExporter: {\n    singlepage: 'Single page'\n  },\n  MultiPageExporter: {\n    multipage: 'Multiple pages',\n    exportingPage: function exportingPage(_ref) {\n      var currentPage = _ref.currentPage,\n          totalPages = _ref.totalPages;\n      return \"Exporting page \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  },\n  MultiPageVerticalExporter: {\n    multipagevertical: 'Multiple pages (vertical)',\n    exportingPage: function exportingPage(_ref2) {\n      var currentPage = _ref2.currentPage,\n          totalPages = _ref2.totalPages;\n      return \"Exporting page \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  } //endregion\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Grid/lib/Grid/localization/En.js?")},"./examples/_shared/locales/examples.locale.En.js":
/*!********************************************************!*\
  !*** ./examples/_shared/locales/examples.locale.En.js ***!
  \********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n/* harmony import */ var _lib_Scheduler_localization_En_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/SchedulerPro/localization/En.js */ \"./lib/SchedulerPro/localization/En.js\");\n/* harmony import */ var _shared_locale_En_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.locale.En.js */ \"./examples/_shared/locales/shared.locale.En.js\");\n\n\n\nvar examplesEnLocale = _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mergeLocales(_shared_locale_En_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  \"extends\": 'En',\n  Button: {\n    'Add column': 'Add column',\n    'Remove column': 'Remove column'\n  },\n  Column: {\n    Capacity: 'Capacity',\n    City: 'City',\n    Company: 'Company',\n    Duration: 'Duration',\n    'Employment type': 'Employment type',\n    End: 'End',\n    'First name': 'First name',\n    Id: '#',\n    Machines: 'Machines',\n    Name: 'Name',\n    'Nbr tasks': 'Nbr tasks',\n    'Production line': 'Production line',\n    Rating: 'Rating',\n    Role: 'Role',\n    Score: 'Score',\n    Staff: 'Staff',\n    Start: 'Start',\n    Surname: 'Surname',\n    'Task color': 'Task color',\n    Type: 'Type',\n    'Unassigned tasks': 'Unassigned tasks'\n  },\n  Combo: {\n    'Group by': 'Group by'\n  },\n  EventEdit: {\n    Location: 'Location'\n  },\n  MenuItem: {\n    'Custom header item': 'Custom header item',\n    'Custom cell action': 'Custom cell action'\n  },\n  Slider: {\n    'Font size': 'Font size'\n  }\n});\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('En', _lib_Scheduler_localization_En_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('EnExamples', examplesEnLocale);\n/* harmony default export */ __webpack_exports__[\"default\"] = (examplesEnLocale);\n\n//# sourceURL=webpack:///./examples/_shared/locales/examples.locale.En.js?")},"./examples/_shared/locales/shared.locale.En.js":
/*!******************************************************!*\
  !*** ./examples/_shared/locales/shared.locale.En.js ***!
  \******************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"extends\": 'En',\n  Button: {\n    'Display hints': 'Display hints',\n    Apply: 'Apply'\n  },\n  Checkbox: {\n    'Auto apply': 'Auto apply',\n    Automatically: 'Automatically'\n  },\n  CodeEditor: {\n    'Code editor': 'Code editor',\n    'Download code': 'Download code'\n  },\n  Combo: {\n    'Select theme': 'Select theme',\n    'Select locale': 'Select locale',\n    'Select size': 'Select size'\n  },\n  Shared: {\n    'Full size': 'Full size',\n    'Locale changed': 'Locale changed',\n    'Phone size': 'Phone size'\n  },\n  Tooltip: {\n    'Click to show info and switch theme or locale': 'Click to show info and switch theme or locale',\n    'Click to show the built in code editor': 'Click to show the built in code editor',\n    CheckAutoHints: 'Check to automatically display hints when loading the example',\n    Fullscreen: 'Fullscreen'\n  }\n});\n\n//# sourceURL=webpack:///./examples/_shared/locales/shared.locale.En.js?")},"./lib/SchedulerPro/localization/En.js":
/*!******************************************!*\
  !*** ./lib/SchedulerPro/localization/En.js ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Grid/localization/En.js */ \"../Grid/lib/Grid/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Grid_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  ResourceInfoColumn: {\n    eventCountText: function eventCountText(data) {\n      return data + ' event' + (data !== 1 ? 's' : '');\n    }\n  },\n  Dependencies: {\n    from: 'From',\n    to: 'To',\n    valid: 'Valid',\n    invalid: 'Invalid'\n  },\n  DependencyType: {\n    SS: 'SS',\n    SF: 'SF',\n    FS: 'FS',\n    FF: 'FF',\n    StartToStart: 'Start-to-Start',\n    StartToEnd: 'Start-to-End',\n    EndToStart: 'End-to-Start',\n    EndToEnd: 'End-to-End',\n    \"short\": ['SS', 'SF', 'FS', 'FF'],\n    \"long\": ['Start-to-Start', 'Start-to-End', 'End-to-Start', 'End-to-End']\n  },\n  DependencyEdit: {\n    From: 'From',\n    To: 'To',\n    Type: 'Type',\n    Lag: 'Lag',\n    'Edit dependency': 'Edit dependency',\n    Save: 'Save',\n    Delete: 'Delete',\n    Cancel: 'Cancel',\n    StartToStart: 'Start to Start',\n    StartToEnd: 'Start to End',\n    EndToStart: 'End to Start',\n    EndToEnd: 'End to End'\n  },\n  EventEdit: {\n    Name: 'Name',\n    Resource: 'Resource',\n    Start: 'Start',\n    End: 'End',\n    Save: 'Save',\n    Delete: 'Delete',\n    Cancel: 'Cancel',\n    'Edit event': 'Edit event',\n    Repeat: 'Repeat'\n  },\n  EventDrag: {\n    eventOverlapsExisting: 'Event overlaps existing event for this resource',\n    noDropOutsideTimeline: 'Event may not be dropped completely outside the timeline'\n  },\n  SchedulerBase: {\n    'Add event': 'Add event',\n    'Delete event': 'Delete event',\n    'Unassign event': 'Unassign event'\n  },\n  // TODO: 'headerContextMenu' is deprecated. Please see https://bryntum.com/docs/scheduler/#guides/upgrades/4.0.0.md for more information.\n  HeaderContextMenu: {\n    pickZoomLevel: 'Zoom',\n    activeDateRange: 'Date range',\n    startText: 'Start date',\n    endText: 'End date',\n    todayText: 'Today'\n  },\n  TimeAxisHeaderMenu: {\n    pickZoomLevel: 'Zoom',\n    activeDateRange: 'Date range',\n    startText: 'Start date',\n    endText: 'End date',\n    todayText: 'Today'\n  },\n  EventFilter: {\n    filterEvents: 'Filter tasks',\n    byName: 'By name'\n  },\n  TimeRanges: {\n    showCurrentTimeLine: 'Show current timeline'\n  },\n  PresetManager: {\n    secondAndMinute: {\n      displayDateFormat: 'll LTS'\n    },\n    minuteAndHour: {\n      topDateFormat: 'ddd MM/DD, hA',\n      displayDateFormat: 'll LST'\n    },\n    hourAndDay: {\n      topDateFormat: 'ddd MM/DD',\n      middleDateFormat: 'LST',\n      displayDateFormat: 'll LST'\n    },\n    weekAndDay: {\n      displayDateFormat: 'll LST'\n    },\n    dayAndWeek: {\n      displayDateFormat: 'll LST'\n    }\n  },\n  RecurrenceConfirmationPopup: {\n    'delete-title': 'You are deleting an event',\n    'delete-all-message': 'Do you want to delete all occurrences of this event?',\n    'delete-further-message': 'Do you want to delete this and all future occurrences of this event, or only the selected occurrence?',\n    'delete-further-btn-text': 'Delete All Future Events',\n    'delete-only-this-btn-text': 'Delete Only This Event',\n    'update-title': 'You are changing a repeating event',\n    'update-all-message': 'Do you want to change all occurrences of this event?',\n    'update-further-message': 'Do you want to change only this occurrence of the event, or this and all future occurrences?',\n    'update-further-btn-text': 'All Future Events',\n    'update-only-this-btn-text': 'Only This Event',\n    Yes: 'Yes',\n    Cancel: 'Cancel',\n    width: 600\n  },\n  RecurrenceLegend: {\n    ' and ': ' and ',\n    // frequency patterns\n    Daily: 'Daily',\n    // Weekly on Sunday\n    // Weekly on Sun, Mon and Tue\n    'Weekly on {1}': function WeeklyOn1(_ref) {\n      var days = _ref.days;\n      return \"Weekly on \".concat(days);\n    },\n    // Monthly on 16\n    // Monthly on the last weekday\n    'Monthly on {1}': function MonthlyOn1(_ref2) {\n      var days = _ref2.days;\n      return \"Monthly on \".concat(days);\n    },\n    // Yearly on 16 of January\n    // Yearly on the last weekday of January and February\n    'Yearly on {1} of {2}': function YearlyOn1Of2(_ref3) {\n      var days = _ref3.days,\n          months = _ref3.months;\n      return \"Yearly on \".concat(days, \" of \").concat(months);\n    },\n    // Every 11 days\n    'Every {0} days': function Every0Days(_ref4) {\n      var interval = _ref4.interval;\n      return \"Every \".concat(interval, \" days\");\n    },\n    // Every 2 weeks on Sunday\n    // Every 2 weeks on Sun, Mon and Tue\n    'Every {0} weeks on {1}': function Every0WeeksOn1(_ref5) {\n      var interval = _ref5.interval,\n          days = _ref5.days;\n      return \"Every \".concat(interval, \" weeks on \").concat(days);\n    },\n    // Every 2 months on 16\n    // Every 2 months on the last weekday\n    'Every {0} months on {1}': function Every0MonthsOn1(_ref6) {\n      var interval = _ref6.interval,\n          days = _ref6.days;\n      return \"Every \".concat(interval, \" months on \").concat(days);\n    },\n    // Every 2 years on 16 of January\n    // Every 2 years on the last weekday of January and February\n    'Every {0} years on {1} of {2}': function Every0YearsOn1Of2(_ref7) {\n      var interval = _ref7.interval,\n          days = _ref7.days,\n          months = _ref7.months;\n      return \"Every \".concat(interval, \" years on \").concat(days, \" of \").concat(months);\n    },\n    // day position translations\n    position1: 'the first',\n    position2: 'the second',\n    position3: 'the third',\n    position4: 'the fourth',\n    position5: 'the fifth',\n    'position-1': 'the last',\n    // day options\n    day: 'day',\n    weekday: 'weekday',\n    'weekend day': 'weekend day',\n    // {0} - day position info (\"the last\"/\"the first\"/...)\n    // {1} - day info (\"Sunday\"/\"Monday\"/.../\"day\"/\"weekday\"/\"weekend day\")\n    // For example:\n    //  \"the last Sunday\"\n    //  \"the first weekday\"\n    //  \"the second weekend day\"\n    daysFormat: function daysFormat(_ref8) {\n      var position = _ref8.position,\n          days = _ref8.days;\n      return \"\".concat(position, \" \").concat(days);\n    }\n  },\n  RecurrenceEditor: {\n    'Repeat event': 'Repeat event',\n    Cancel: 'Cancel',\n    Save: 'Save',\n    Frequency: 'Frequency',\n    Every: 'Every',\n    DAILYintervalUnit: 'day(s)',\n    WEEKLYintervalUnit: 'week(s)',\n    MONTHLYintervalUnit: 'month(s)',\n    YEARLYintervalUnit: 'year(s)',\n    Each: 'Each',\n    'On the': 'On the',\n    'End repeat': 'End repeat',\n    'time(s)': 'time(s)'\n  },\n  RecurrenceDaysCombo: {\n    day: 'day',\n    weekday: 'weekday',\n    'weekend day': 'weekend day'\n  },\n  RecurrencePositionsCombo: {\n    position1: 'first',\n    position2: 'second',\n    position3: 'third',\n    position4: 'fourth',\n    position5: 'fifth',\n    'position-1': 'last'\n  },\n  RecurrenceStopConditionCombo: {\n    Never: 'Never',\n    After: 'After',\n    'On date': 'On date'\n  },\n  RecurrenceFrequencyCombo: {\n    Daily: 'Daily',\n    Weekly: 'Weekly',\n    Monthly: 'Monthly',\n    Yearly: 'Yearly'\n  },\n  RecurrenceCombo: {\n    None: 'None',\n    Custom: 'Custom...'\n  },\n  //region Features\n  Summary: {\n    'Summary for': function SummaryFor(date) {\n      return \"Summary for \".concat(date);\n    }\n  },\n  //endregion\n  //region Export\n  ScheduleRangeCombo: {\n    completeview: 'Complete schedule',\n    currentview: 'Visible schedule',\n    daterange: 'Date range',\n    completedata: 'Complete schedule (for all events)'\n  },\n  SchedulerExportDialog: {\n    'Schedule range': 'Schedule range',\n    'Export from': 'From',\n    'Export to': 'To'\n  },\n  ExcelExporter: {\n    'No resource assigned': 'No resource assigned'\n  },\n  //endregion\n  CrudManagerView: {\n    serverResponseLabel: 'Server response:'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///./lib/SchedulerPro/localization/En.js?")}})}));