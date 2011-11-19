// ease.js
// JavaScript ease animation library
//
// Copyright 2011 Enrico Marino
// MIT license

// inspired by robert penner easing equations
// http://www.robertpenner.com/easing_terms_of_use.html 
// Copyright 2003 Robert Penner

!function (name, definition) {
    if (typeof module != 'undefined') module.exports = definition()
    else if (typeof define == 'function' && define.amd) define(name, definition)
    else this[name] = definition()
}('ease', function (context, undefined) {

    var Math = Math,
        cos = Math.cos,
        exp = Math.exp,
        pow = Math.pow,
        random = Math.random,
        round = Math.round,
        sin = Math.sin,
        PI = Math.PI,
        PI_div_2 = PI / 2,
        PI_mul_2 = PI * 2;

    function blink (pos, blinks) {

        return round(pos * (blinks || 5)) % 2;
    }

    function bounce (t) {

        if (t < 0.3636) { // t < 1 / 2.75
            return 7.5625 * t * t;
        }
        if (t < 0.7273) { // t < 2 / 2.75
            t -= 0.5455; // t = t - 1.5 / 2.75
            return 7.5625 * t * t + 0.75;
        }
        if (t < 0.9091) { // t < 2.5 / 2.75
            t -= 0.8182; // t = t - 2.25 / 2.75
            return 7.5625 * t * t + 0.9375;
        }
        t -= 0.9545; // t = t - 2.625 / 2.75
        return 7.5625 * t * t + 0.9844;
    }

    function bounce_past (t) {

        if (t < 0.3636) { // t < 1 / 2.75
            return 7.5625 * t * t;
        }
        if (t < 0.7273) { // t < 2 / 2.75
            t -= 0.5455; // t = t - 1.5 / 2.75
            return 2 - (7.5625 * t * t + 0.75);
        }
        if (t < 0.9091) { // t < 2.5 / 2.75
            t -= 0.8182; // t = t - 2.25 / 2.75
            return 2 - (7.5625 * t * t + 0.9375);
        }
        t -= 0.9545; // t = t - 2.625 / 2.75
        return 2 - (7.5625 * t * t + 0.9844);
    }

    function elastic (t) {

        return -1 * pow(4, -8 * t) * sin((t * 6 - 1) * PI) + 1;
    }

    function flicker (t) {

        t = t + (random() - 0.5) * 0.2;
        return sinusoidal(t < 0 ? 0 : t > 1 ? 1 : t);
    }

    function in_back (t) {

        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    }

    function in_strong (t) {

        return (t === 0) ? 0 : pow(2, 10 * (t - 1));
    }

    function mirror (t) {

        if (t < 0.5) {
            return sinusoidal(t * 2);
        }
        return sinusoidal(1 - (t - 0.5) * 2);
    }

    function out (t) {

        return sin(t * PI_div_2);
    }

    function out_back (pos) {

        var s = 1.70158;
        t -= 1;
        return t * t * ((s + 1) * t + s) + 1;
    }

    function out_bonce (pos) {

        if (t < 0.3636) { // t < 1 / 2.75
            return 7.5625 * t * t;
        } else if (t < 0.7273) { // t < 2 / 2.75
            t -= 0.5455; // t = t - 1.5 / 2.75
            return 7.5625 * t * t + 0.75;
        } else if (t < 0.9091) { // t < 2.5 / 2.75
            t -= 0.8182; // t = t - 2.25 / 2.75
            return 7.5625 * t * t + 0.9375);
        }
        t -= 0.9545; // t = t - 2.625 / 2.75
        return 7.5625 * t * t + 0.9844;
    }

    function out_strong (t) {

        return (t === 1) ? 1 : 1 - pow(2, -10 * t);
    }

    function pulse (t, pulses) {

        pulse = pulse || 5;
        return 0.5 - cos((t * (pulses - 0.5) * 2) * PI) * 0.5;
    }

    function sinusoidal (t) {

        return 0.5 -cos(t * PI) * 0.5;
    }

    function spring (t) {

        return 1 - (cos(t * 4.5 * PI) * exp(-t * 6));
    }

    function swing_from (t) {

        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    }

    function swing_to (t) {

        var s = 1.70158;
        t -= 1;
        return t * t * ((s + 1) * t + s) + 1;
    }

    function wobble (t) {

        return 0.5 -cos(t * PI * (9 * t)) * 0.5);
    }

    return {
        blink: blink,
        bounce: bounce,
        bounce_past: bounce_past,
        elastic: elastic,
        flicker: flicker,
        in_back: in_back,
        in_strong: in_strong,
        mirror: mirror,
        out: out,
        out_back: out_back,
        out_bonce: out_bonce,
        out_strong: out_strong,
        pulse: pulse,
        sinusoidal: sinusoidal,
        spring: spring,
        swing_from: swing_from,
        swing_to: swing_to,
        wobble: wobble
    };

}(this));