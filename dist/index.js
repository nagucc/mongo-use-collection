'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('babel-runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('babel-runtime/helpers/asyncToGenerator'));
var mongodb = require('mongodb');

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
//# sourceMappingURL=index.js.map