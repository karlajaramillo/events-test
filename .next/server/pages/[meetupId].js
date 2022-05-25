module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/monina/Desktop/nextjs/events-nextjs/components/meetups/MeetupDetail.js\";\n//#components/meetups/MeetupDetail.js\n\n\n\nfunction MeetupDetail(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCLHNCQUNJO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFLSixLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0FBRWNQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vI2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanNcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _jsxFileName = \"/Users/monina/Desktop/nextjs/events-nextjs/pages/[meetupId]/index.js\";\n//#pages/[meetupId]/index.js\n\n\n\n\n\nfunction MeetupDetails(props) {\n  // we need to fetch data to show the details\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      image: props.meetupData.image,\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }, this);\n}\n\nasync function getStaticPaths() {\n  // Connect to the DB and get access to the meetups collection\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__[\"MongoClient\"].connect('mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // toArray() -> to convert into JS object\n\n  const result = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray(); // find accepts two arguments\n  // 1 arg - {} -> give me all without filters\n  // 2 arg - {} -> extract only the field I need.\n  // {_id: 1} -> only includes the ID\n\n  client.close();\n  return {\n    // false -> indicates that you define all paths here\n    // true -> if you define only the popular pages, not all of them, so it will generate when the request is made\n    fallback: false,\n    // paths: [\n    //   {\n    //     params: {\n    //       meetupId: 'm1',\n    //     },\n    //   },\n    //   {\n    //     params: {\n    //       meetupId: 'm2',\n    //     },\n    //   }\n    // ]\n    // map the result to get an --> array with ids\n    paths: result.map(item => ({\n      // the first parenthesis means return an object {}\n      params: {\n        meetupId: item._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  // fetch data for a single meetup\n  // get the id\n  // params.meetupId because the file name is --> [meetupId]\n  const meetupId = context.params.meetupId; // string from the url\n  //const {meetupId} = context.params;\n\n  console.log(meetupId); // Now with the id from the Database, we can find this document into the DB with findOne\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__[\"MongoClient\"].connect('mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // toArray() -> to convert into JS object\n\n  console.log(meetupId); // findOne -> we passed an object\n  // convert the string id from the url --> to object to find the docuement inside db\n  // wrap the url id with --> ObjectId(meetupId) -> to convert it into Object\n\n  const selectedMeetup = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_3__[\"ObjectId\"])(meetupId)\n  });\n  console.log(selectedMeetup);\n  client.close(); //return {\n  // props: {\n  //   meetupData: {\n  //     id: meetupId,\n  //     title: 'The First Meetup',\n  //     image:\n  //       'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244',\n  //     address: 'Chicago',\n  //     description: 'This is a second meetup'\n  //   }\n  // }\n  //}\n\n  return {\n    props: {\n      meetupData: {\n        id: selectedMeetup._id.toString(),\n        // to avoid 'Serialization' problem\n        title: selectedMeetup.title,\n        address: selectedMeetup.address,\n        description: selectedMeetup.description,\n        image: selectedMeetup.image\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJpdGVtIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZE1lZXR1cCIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0I7QUFDQSxzQkFHSSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyx3RUFBRDtBQUNGLFdBQUssRUFBRUgsS0FBSyxDQUFDQyxVQUFOLENBQWlCRyxLQUR0QjtBQUVGLFdBQUssRUFBRUosS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxLQUZ0QjtBQUdGLGFBQU8sRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCSSxPQUh4QjtBQUlGLGlCQUFXLEVBQUVMLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkU7QUFKNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhKO0FBa0JEOztBQUVNLGVBQWVHLGNBQWYsR0FBaUM7QUFDdEM7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQixvR0FEbUIsQ0FBckI7QUFJQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUIsQ0FSc0MsQ0FVdEM7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFsQixDQUF1QixFQUF2QixFQUEyQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUEzQixFQUF1Q0MsT0FBdkMsRUFBckIsQ0FYc0MsQ0FZdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUFULFFBQU0sQ0FBQ1UsS0FBUDtBQUNBLFNBQU87QUFDTDtBQUNBO0FBQ0FDLFlBQVEsRUFBRSxLQUhMO0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsU0FBSyxFQUFFTixNQUFNLENBQUNPLEdBQVAsQ0FBV0MsSUFBSSxLQUFLO0FBQ3pCO0FBQ0FDLFlBQU0sRUFBRTtBQUNOQyxnQkFBUSxFQUFFRixJQUFJLENBQUNOLEdBQUwsQ0FBU1MsUUFBVDtBQURKO0FBRmlCLEtBQUwsQ0FBZjtBQWpCRixHQUFQO0FBd0JEO0FBRU0sZUFBZUMsY0FBZixDQUErQkMsT0FBL0IsRUFBd0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsUUFBTUgsUUFBUSxHQUFHRyxPQUFPLENBQUNKLE1BQVIsQ0FBZUMsUUFBaEMsQ0FKNkMsQ0FJSjtBQUN6Qzs7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVosRUFONkMsQ0FTN0M7O0FBQ0EsUUFBTWhCLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLG9HQURtQixDQUFyQjtBQUlBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFFQSxRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQixDQWhCNkMsQ0FrQjdDOztBQUNBZSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWixFQW5CNkMsQ0FvQjdDO0FBQ0E7QUFDQTs7QUFDQSxRQUFNTSxjQUFjLEdBQUcsTUFBTWxCLGlCQUFpQixDQUFDbUIsT0FBbEIsQ0FBMEI7QUFBRWYsT0FBRyxFQUFFZ0Isd0RBQVEsQ0FBQ1IsUUFBRDtBQUFmLEdBQTFCLENBQTdCO0FBQ0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUFaO0FBQ0F0QixRQUFNLENBQUNVLEtBQVAsR0F6QjZDLENBMkI3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBTztBQUNMakIsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUU7QUFDVitCLFVBQUUsRUFBRUgsY0FBYyxDQUFDZCxHQUFmLENBQW1CUyxRQUFuQixFQURNO0FBQ3lCO0FBQ25DdEIsYUFBSyxFQUFFMkIsY0FBYyxDQUFDM0IsS0FGWjtBQUdWRyxlQUFPLEVBQUV3QixjQUFjLENBQUN4QixPQUhkO0FBSVZGLG1CQUFXLEVBQUUwQixjQUFjLENBQUMxQixXQUpsQjtBQUtWQyxhQUFLLEVBQUV5QixjQUFjLENBQUN6QjtBQUxaO0FBRFA7QUFERixHQUFQO0FBV0Q7QUFDY0wsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnXG5cbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMgKHByb3BzKSB7XG4gIC8vIHdlIG5lZWQgdG8gZmV0Y2ggZGF0YSB0byBzaG93IHRoZSBkZXRhaWxzXG4gIHJldHVybiAoXG5cblxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TWVldHVwRGV0YWlsXG4gICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cbiAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxuICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XG4gICAgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgXG5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCkge1xuICAvLyBDb25uZWN0IHRvIHRoZSBEQiBhbmQgZ2V0IGFjY2VzcyB0byB0aGUgbWVldHVwcyBjb2xsZWN0aW9uXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8va2F2YWphZ2E6RXZlbnRzMjAyMkBjbHVzdGVyMC56dnA5YXAzLm1vbmdvZGIubmV0L01lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICApXG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5cbiAgLy8gdG9BcnJheSgpIC0+IHRvIGNvbnZlcnQgaW50byBKUyBvYmplY3RcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXG4gIC8vIGZpbmQgYWNjZXB0cyB0d28gYXJndW1lbnRzXG4gIC8vIDEgYXJnIC0ge30gLT4gZ2l2ZSBtZSBhbGwgd2l0aG91dCBmaWx0ZXJzXG4gIC8vIDIgYXJnIC0ge30gLT4gZXh0cmFjdCBvbmx5IHRoZSBmaWVsZCBJIG5lZWQuXG4gIC8vIHtfaWQ6IDF9IC0+IG9ubHkgaW5jbHVkZXMgdGhlIElEXG5cbiAgY2xpZW50LmNsb3NlKClcbiAgcmV0dXJuIHtcbiAgICAvLyBmYWxzZSAtPiBpbmRpY2F0ZXMgdGhhdCB5b3UgZGVmaW5lIGFsbCBwYXRocyBoZXJlXG4gICAgLy8gdHJ1ZSAtPiBpZiB5b3UgZGVmaW5lIG9ubHkgdGhlIHBvcHVsYXIgcGFnZXMsIG5vdCBhbGwgb2YgdGhlbSwgc28gaXQgd2lsbCBnZW5lcmF0ZSB3aGVuIHRoZSByZXF1ZXN0IGlzIG1hZGVcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgLy8gcGF0aHM6IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcGFyYW1zOiB7XG4gICAgLy8gICAgICAgbWVldHVwSWQ6ICdtMScsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAvLyAgICAgICBtZWV0dXBJZDogJ20yJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH1cbiAgICAvLyBdXG4gICAgLy8gbWFwIHRoZSByZXN1bHQgdG8gZ2V0IGFuIC0tPiBhcnJheSB3aXRoIGlkc1xuICAgIHBhdGhzOiByZXN1bHQubWFwKGl0ZW0gPT4gKHtcbiAgICAgIC8vIHRoZSBmaXJzdCBwYXJlbnRoZXNpcyBtZWFucyByZXR1cm4gYW4gb2JqZWN0IHt9XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWVldHVwSWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKGNvbnRleHQpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXG4gIC8vIGdldCB0aGUgaWRcbiAgLy8gcGFyYW1zLm1lZXR1cElkIGJlY2F1c2UgdGhlIGZpbGUgbmFtZSBpcyAtLT4gW21lZXR1cElkXVxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkIC8vIHN0cmluZyBmcm9tIHRoZSB1cmxcbiAgLy9jb25zdCB7bWVldHVwSWR9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnNvbGUubG9nKG1lZXR1cElkKVxuXG5cbiAgLy8gTm93IHdpdGggdGhlIGlkIGZyb20gdGhlIERhdGFiYXNlLCB3ZSBjYW4gZmluZCB0aGlzIGRvY3VtZW50IGludG8gdGhlIERCIHdpdGggZmluZE9uZVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICdtb25nb2RiK3NydjovL2thdmFqYWdhOkV2ZW50czIwMjJAY2x1c3RlcjAuenZwOWFwMy5tb25nb2RiLm5ldC9NZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKVxuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKClcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxuXG4gIC8vIHRvQXJyYXkoKSAtPiB0byBjb252ZXJ0IGludG8gSlMgb2JqZWN0XG4gIGNvbnNvbGUubG9nKG1lZXR1cElkKVxuICAvLyBmaW5kT25lIC0+IHdlIHBhc3NlZCBhbiBvYmplY3RcbiAgLy8gY29udmVydCB0aGUgc3RyaW5nIGlkIGZyb20gdGhlIHVybCAtLT4gdG8gb2JqZWN0IHRvIGZpbmQgdGhlIGRvY3VlbWVudCBpbnNpZGUgZGJcbiAgLy8gd3JhcCB0aGUgdXJsIGlkIHdpdGggLS0+IE9iamVjdElkKG1lZXR1cElkKSAtPiB0byBjb252ZXJ0IGl0IGludG8gT2JqZWN0XG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkTWVldHVwKVxuICBjbGllbnQuY2xvc2UoKVxuXG4gIC8vcmV0dXJuIHtcbiAgLy8gcHJvcHM6IHtcbiAgLy8gICBtZWV0dXBEYXRhOiB7XG4gIC8vICAgICBpZDogbWVldHVwSWQsXG4gIC8vICAgICB0aXRsZTogJ1RoZSBGaXJzdCBNZWV0dXAnLFxuICAvLyAgICAgaW1hZ2U6XG4gIC8vICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3Nzk1OTg1ODYxNy02N2Y4NWNmNGYxZGY/aXhsaWI9cmItMS4yLjEmcmF3X3VybD10cnVlJnE9ODAmZm09anBnJmNyb3A9ZW50cm9weSZjcz10aW55c3JnYiZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTI0NCcsXG4gIC8vICAgICBhZGRyZXNzOiAnQ2hpY2FnbycsXG4gIC8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwJ1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL31cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksIC8vIHRvIGF2b2lkICdTZXJpYWxpemF0aW9uJyBwcm9ibGVtXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });