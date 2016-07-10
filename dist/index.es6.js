import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import 'babel-polyfill';
import { MongoClient } from 'mongodb';

var _this = this;

var useCollection = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url, collectionName, cb) {
    var db, col, result;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return MongoClient.connect(url);

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

export { useCollection };
//# sourceMappingURL=index.es6.js.map