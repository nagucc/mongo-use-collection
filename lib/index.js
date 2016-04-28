'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCollection = undefined;

var _mongodb = require('mongodb');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var useCollection = exports.useCollection = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, collectionName, cb) {
    var db, col, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongodb.MongoClient.connect(url);

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
    }, _callee, undefined);
  }));

  return function useCollection(_x, _x2, _x3) {
    return ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=index.js.map