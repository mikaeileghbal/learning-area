const KingJoffery = (function () {
  function KingJoffery() {}

  KingJoffery.prototype.makeDecision = function () {
    console.log("King makes decision");
  };

  KingJoffery.prototype.marry = function () {
    console.log("King marries");
  };

  return KingJoffery;
})();

const LortTywin = (function () {
  function LordTywin() {}

  LordTywin.prototype.makeDecision = function () {
    console.log("LordTywin makes decitsion");
  };

  return LordTywin;
})();

// concrete factory
const LannisterFactory = (function () {
  function LannisterFactory() {}

  LannisterFactory.prototype.getKing = function () {
    return new KingJoffery();
  };

  LannisterFactory.prototype.getHandOfTheKing = function () {
    return new LortTywin();
  };

  return LannisterFactory;
})();
