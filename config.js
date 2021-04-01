// settings
const api = "https://explorer.talleo.org/api";
const coinDifficultyTarget=60;
const symbol="TLO";
const coinUnits=100;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"https://pool.talleo.org","api":"https://pool.talleo.org:7112","status":true,"flag":"DE","loc":"GERMANY"},
    {"id":2,"visible":true,"url":"https://pool.raasu.org","api":"https://pool.raasu.org:7119","status":true,"flag":"FI","loc":"FINLAND"},
    {"id":3,"visible":true,"url":"https://tlo.cryptonote.club","api":"https://tlo.cryptonote.club:8199","status":true,"flag":"DE","loc":"GERMANY"},
];
const seedsNodes = [
    {"id":"tlo2","url":"https://explorer.talleo.org/api"},
    {"id":"tlo1","url":"https://pool.talleo.org/api"},
];
