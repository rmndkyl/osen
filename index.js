const a0_0x10f063 = a0_0x14ed;

(function(_0x5be3b6, _0x55953a) {
    const _0x2e20c1 = a0_0x14ed,
        _0x481773 = _0x5be3b6();
    while (!![]) {
        try {
            const _0x2b0bbf = parseInt(_0x2e20c1(0x142)) / 0x1 * (-parseInt(_0x2e20c1(0x141)) / 0x2) + -parseInt(_0x2e20c1(0x149)) / 0x3 + -parseInt(_0x2e20c1(0x128)) / 0x4 * (parseInt(_0x2e20c1(0x104)) / 0x5) + -parseInt(_0x2e20c1(0x130)) / 0x6 + -parseInt(_0x2e20c1(0x137)) / 0x7 * (-parseInt(_0x2e20c1(0x120)) / 0x8) + parseInt(_0x2e20c1(0x11d)) / 0x9 + -parseInt(_0x2e20c1(0x134)) / 0xa * (-parseInt(_0x2e20c1(0x11e)) / 0xb);
            if (_0x2b0bbf === _0x55953a) break;
            else _0x481773['push'](_0x481773['shift']());
        } catch (_0x3af79d) {
            _0x481773['push'](_0x481773['shift']());
        }
    }
}(a0_0x3062, 0xd5655));

const readline = require('readline'),
    figlet = require(a0_0x10f063(0x11c)),
    fs = require('fs'),
    axios = require(a0_0x10f063(0x107)),
    TelegramBot = require('node-telegram-bot-api'),
    { Ed25519Keypair, JsonRpcProvider, RawSigner, TransactionBlock, Connection } = require(a0_0x10f063(0x139)),
    colors = require('colors'),
    rl = readline.createInterface({ 'input': process['stdin'], 'output': process[a0_0x10f063(0x148)] });

function a0_0x14ed(_0x5027bd, _0x4f54f8) {
    const _0x3062c0 = a0_0x3062();
    return a0_0x14ed = function(_0x14eda3, _0xc25558) {
        _0x14eda3 = _0x14eda3 - 0x102;
        let _0x3740c6 = _0x3062c0[_0x14eda3];
        return _0x3740c6;
    }, a0_0x14ed(_0x5027bd, _0x4f54f8);
}

function displayAsciiArt() {
    return new Promise((_0x540714, _0x3af728) => {
        const _0x2d2fd0 = a0_0x14ed;
        figlet[_0x2d2fd0(0x138)](_0x2d2fd0(0x131), { 'font': _0x2d2fd0(0x12b), 'horizontalLayout': _0x2d2fd0(0x14d), 'verticalLayout': _0x2d2fd0(0x14d) }, (_0x32cb5b, _0xe34488) => {
            const _0x459e0b = _0x2d2fd0;
            if (_0x32cb5b) _0x3af728(_0x32cb5b);
            else {
                const _0xde270b = _0xe34488[_0x459e0b(0x135)](_0x459e0b(0x125), colors[_0x459e0b(0x115)][_0x459e0b(0x14a)]('PASS'))[_0x459e0b(0x135)](_0x459e0b(0x12c), colors[_0x459e0b(0x114)][_0x459e0b(0x14a)](_0x459e0b(0x12c)));
                _0x540714(colors['cyan'](_0xde270b));
            }
        });
    });
}

async function getPasswordFromUrl(_0x365017) {
    const _0x561570 = a0_0x10f063;
    try {
        const _0x573c5a = await axios[_0x561570(0x13f)](_0x365017);
        return _0x573c5a['data'][_0x561570(0x12a)];
    } catch (_0x3fddc2) {
        console[_0x561570(0x133)](_0x561570(0x127), _0x3fddc2);
        throw _0x3fddc2;
    }
}

const passwordUrl = a0_0x10f063(0x12f);

displayAsciiArt().then(_0x1ec0b4 => {
    const _0xe74530 = a0_0x10f063;
    console[_0xe74530(0x11a)](_0x1ec0b4);
    return getPasswordFromUrl(passwordUrl);
}).then(_0xe2e522 => {
    promptPassword(_0xe2e522);
}).catch(_0x3a29c4 => {
    const _0x488670 = a0_0x10f063;
    console[_0x488670(0x133)](_0x488670(0x150), _0x3a29c4);
});

function promptPassword(_0x4ee779) {
    const _0x453034 = a0_0x10f063;
    rl[_0x453034(0x10f)]('MASUKAN APIKEY: ', _0x1a1735 => {
        const _0x19cd4c = _0x453034;
        if (_0x1a1735 === _0x4ee779) {
            console[_0x19cd4c(0x11a)](_0x19cd4c(0x121));
            rl[_0x19cd4c(0x129)]();
            startBot();
        } else {
            console[_0x19cd4c(0x11a)](colors[_0x19cd4c(0x106)](_0x19cd4c(0x13e)));
            promptPassword(_0x4ee779);
        }
    });
}

function a0_0x3062() {
    const _0xa50b01 = ['length', 'https://raw.githubusercontent.com/AirdropKill/oceankey/main/key.json', '3677538VMtfCt', 'OCEANBOT', ' seconds\x0d', 'error', '23862560oxMlFK', 'replace', 'balanceChanges', '7VcYKJB', 'text', '@mysten/sui.js', 'readFileSync', 'filter', '558252117', '0x6', 'APIKEY SALAH https://t.me/airdrop_killerbot', 'get', 'digest', '97378vPMIGy', '28RswqdM', 'WaitForLocalExecution', 'catch', 'm/44\'/784\'/0\'/0\'/0\'', 'NTBA_FIX_350', 'deriveKeypair', 'stdout', '882588AUCupd', 'bold', ' BERHASIL: ', 'green', 'default', 'env', '::game::claim', 'Error:', 'https://fullnode.mainnet.sui.io', 'toSuiAddress', '2241460jjRmAf', 'wallets.txt', 'red', 'axios', 'SUDAH DI KLAIM MENUNGGU KLAIM BERIKUTNYA ', 'object', 'then', 'floor', 'split', 'getTransactionBlock', 'coinType', 'question', ' hours ', 'getPublicKey', 'write', '0xa8816d3a6e3136e86bc2873b1f94a15cadc8af2703c075f2d546c2ae367f4df9::ocean::OCEAN', 'yellow', 'white', ' minutes ', 'reduce', 'moveCall', 'https://faucet.testnet.sui.io/gas', 'log', '7085326668:AAEjOfsco9zs-Y5wXu2fVQrv-HJGsuf67yg', 'figlet', '7110972Tmxrdl', '11CpnoQy', 'utf-8', '6917600gKwcwf', 'BENAR', 'Error sending file:', 'amount', 'prompt', 'theme', 'createTransactionBlock', 'cyan', 'node-telegram-bot-api', 'blue', 'Contract call failed:', 'submitTransactionBlock', 'false', '3433hYvDiN', 'password'];
    a0_0x3062 = function() {
        return _0xa50b01;
    };
    return a0_0x3062();
}

function startBot() {
    const _0x1ccfbc = a0_0x10f063,
        _0x5a5ad5 = new Connection({ 'fullnode': _0x1ccfbc(0x124) }),
        _0x3e2a03 = new JsonRpcProvider(_0x5a5ad5),
        _0x4f3355 = fs[_0x1ccfbc(0x11b)](_0x1ccfbc(0x126), _0x1ccfbc(0x132)),
        _0x27141f = _0x4f3355[_0x1ccfbc(0x135)]('\x0a', ''),
        _0x4c3e90 = _0x27141f[_0x1ccfbc(0x10e)]('\x0a'),
        _0x17e703 = new TelegramBot(_0x1ccfbc(0x12e), { 'polling': !![] });
    process[_0x1ccfbc(0x140)][_0x1ccfbc(0x116)] = _0x1ccfbc(0x10d), _0x17e703['onText'](/^\/sui (.+)$/, async(_0x321ba1, _0x19cc94) => {
        const _0x5f089e = _0x1ccfbc,
            _0x1aa4bc = _0x321ba1[0x1][_0x5f089e(0x113)](' ')[0x1],
            _0x1c1d89 = Ed25519Keypair[_0x5f089e(0x147)](_0x1aa4bc),
            _0x3d137f = new RawSigner(_0x1c1d89, _0x3e2a03),
            _0x231c0b = TransactionBlock[_0x5f089e(0x10c)](),
            _0x132413 = await _0x3e2a03[_0x5f089e(0x10a)](_0x1c1d89[_0x5f089e(0x13d)]()),
            _0x31af8b = _0x132413[_0x5f089e(0x103)][_0x5f089e(0x146)](_0x5316e2 => _0x5316e2[_0x5f089e(0x10b)] === _0x5f089e(0x118))[_0x5f089e(0x13b)]((_0x329df2, _0x102557) => _0x329df2 + _0x102557[_0x5f089e(0x12d)], 0x0);
        _0x31af8b >= 0x4563918244f000 ? (_0x4c3e90[_0x5f089e(0x13a)](_0x1aa4bc) ? _0x17e703['sendMessage'](_0x19cc94[_0x5f089e(0x112)], _0x5f089e(0x108)) : (console[_0x5f089e(0x133)](_0x5f089e(0x119), colors[_0x5f089e(0x136)](_0x31af8b)), _0x231c0b[_0x5f089e(0x13c)]({
            'target': _0x5f089e(0x145),
            'typeArguments': [],
            'arguments': [_0x231c0b['pure'](0x0)],
            'gasBudget': 0x493e0
        }), _0x3d137f[_0x5f089e(0x11f)](_0x231c0b)[_0x5f089e(0x142)](_0x4974f4 => {
            const _0x415c9e = _0x5f089e;
            console[_0x415c9e(0x133)](_0x415c9e(0x143), _0x4974f4), _0x17e703['sendMessage'](_0x19cc94[_0x415c9e(0x112)], 'https://suiexplorer.com/txblock/' + _0x4974f4);
        })[_0x5f089e(0x13e)](_0x312de7 => {
            const _0x55e051 = _0x5f089e;
            console[_0x55e051(0x133)](_0x55e051(0x144), _0x312de7), _0x17e703[_0x55e051(0x11a)](_0x19cc94[_0x55e051(0x112)], _0x55e051(0x10a) + _0x312de7);
        }), fs[_0x5f089e(0x11b)](_0x5f089e(0x126), _0x27141f + ('\x0a' + _0x1aa4bc)))) : _0x17e703['sendMessage'](_0x19cc94[_0x5f089e(0x112)], _0x5f089e(0x111) + Math[_0x5f089e(0x112)](_0x31af8b / 0xde0b6b3a7640000) + _0x5f089e(0x110) + Math['floor'](_0x31af8b % 0xde0b6b3a7640000 / 0x16345785d8a000) + _0x5f089e(0x109) + Math[_0x5f089e(0x112)](_0x31af8b % 0x16345785d8a000 / 0x9184e72a000));
    });
}
