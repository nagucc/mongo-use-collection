'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('babel-runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('babel-runtime/helpers/asyncToGenerator'));
var mongodb = require('mongodb');

var _this = this;

var useCollection = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url, collectionName, success) {
    var fail = arguments.length <= 3 || arguments[3] === undefined ? function () {
      return console.log('userCollection: FAILED');
    } : arguments[3];
    var result, db, col;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-line no-console
            result = null;
            _context.prev = 1;
            _context.next = 4;
            return mongodb.MongoClient.connect(url);

          case 4:
            db = _context.sent;
            col = db.collection(collectionName);
            _context.next = 8;
            return success(col, db);

          case 8:
            result = _context.sent;

            db.close();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](1);

            fail(_context.t0);

          case 15:
            _context.prev = 15;
            return _context.abrupt('return', result);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 12, 15, 18]]);
  }));

  return function useCollection(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.useCollection = useCollection;
//# sourceMappingURL=index.js.map