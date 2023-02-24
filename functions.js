// parses ini data
// from https://stackoverflow.com/a/12452845/10363768
function parseINIString(data) {
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    var value = {};
    var lines = data.split(/[\r\n]+/);
    var section = null;
    lines.forEach(function (line) {
        if (regex.comment.test(line)) {
            return;
        } else if (regex.param.test(line)) {
            var match = line.match(regex.param);
            if (section) {
                value[section][match[1]] = match[2];
            } else {
                value[match[1]] = match[2];
            }
        } else if (regex.section.test(line)) {
            var match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        } else if (line.length == 0 && section) {
            section = null;
        };
    });
    return value;
}

// converts the object back to ini
// based on https://github.com/npm/ini/blob/main/lib/ini.js
// Copyright (c) Isaac Z. Schlueter and Contributors
const writeINIString = (obj, opt) => {
    const children = []
    let out = ''
    opt = opt || Object.create(null)
    const separator = ' = ';

    for (const k of Object.keys(obj)) {
        const val = obj[k]
        if (val && Array.isArray(val)) {
            for (const item of val) {
                out += safe(k + '[]') + separator + safe(item) + eol
            }
        } else if (val && typeof val === 'object') {
            children.push(k)
        } else {
            out += safe(k) + separator + safe(val) + eol
        }
    }

    if (opt.section && out.length) {
        out = '[' + safe(opt.section) + ']' + eol + out
    }

    for (const k of children) {
        const nk = dotSplit(k).join('\\.')
        const section = (opt.section ? opt.section + '.' : '') + nk
        const { whitespace } = opt
        const child = writeINIString(obj[k], {
            section,
            whitespace,
        })
        if (out.length && child.length) {
            out += eol
        }

        out += child
    }

    return out
}

const safe = val => {
    if (
        typeof val !== 'string' ||
        val.match(/[=\r\n]/) ||
        val.match(/^\[/) ||
        (val.length > 1 && isQuoted(val)) ||
        val !== val.trim()
    ) {
        return JSON.stringify(val)
    }
    return val.split(';').join('\\;')
}

const dotSplit = str =>
    str.replace(/\1/g, '\u0002LITERAL\\1LITERAL\u0002')
        .replace(/\\\./g, '\u0001')
        .split(/\./)
        .map(part =>
            part.replace(/\1/g, '\\.')
                .replace(/\2LITERAL\\1LITERAL\2/g, '\u0001'))

const isQuoted = val => {
    return (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
}

const eol = typeof process !== 'undefined' &&
    process.platform === 'win32' ? '\r\n' : '\n'