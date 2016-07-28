(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('babel-runtime/regenerator'), require('babel-runtime/helpers/asyncToGenerator'), require('mongodb')) :
  typeof define === 'function' && define.amd ? define(['exports', 'babel-runtime/regenerator', 'babel-runtime/helpers/asyncToGenerator', 'mongodb'], factory) :
  (factory((global.mongo-use-collection = global.mongo-use-collection || {}),global._regeneratorRuntime,global._asyncToGenerator,global.mongodb));
}(this, function (exports,_regeneratorRuntime,_asyncToGenerator,mongodb) { 'use strict';

  _regeneratorRuntime = 'default' in _regeneratorRuntime ? _regeneratorRuntime['default'] : _regeneratorRuntime;
  _asyncToGenerator = 'default' in _asyncToGenerator ? _asyncToGenerator['default'] : _asyncToGenerator;

  var _this = this;

  var useCollection = function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url, collectionName, cb) {
      var db, col, result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return mongodb.MongoClient.connect(url);

            case 2:
              db = _context.sent;
              col = db.collection(collectionName);
              _context.next = 6;
              return cb(col, db);

            case 6:
              result = _context.sent;

              db.close();
              return _context.abrupt('return', result);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function useCollection(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  exports.useCollection = useCollection;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map