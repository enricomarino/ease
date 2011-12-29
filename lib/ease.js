
/*! 
 * ease
 * easy JavaScript ease animation library
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT license
 */

/**
 * inspired by robert penner easing equations
 * Copyright (c) 2003 Robert Penner
 */

!(function (exports) {

  var undefined
    , cos = Math.cos
    , exp = Math.exp
    , pow = Math.pow
    , random = Math.random
    , round = Math.round
    , sin = Math.sin
    , PI = Math.PI
    , PI_div_2 = Math.PI / 2
    , PI_mul_2 = Math.PI * 2
    ;

  var ease = exports.ease = {};

  /**
   * Library version.
   */

  ease.version = '0.2.0';

  /**
   * Back.in
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.back.in = function (t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  };

  /**
   * Back out.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.back.out = function (t) {
    var s = 1.70158;
    t -= 1;
    return t * t * ((s + 1) * t + s) + 1;
  };

  /**
   * Blink.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.blink = function (t) {
    return round(t * 5) % 2;
  };

  /**
   * Bounce in.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.bounce.in = function (t) {
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
  };

  /**
   * Bounce out.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.bounce.out = function (t) {
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
  };

  /**
   * Elastic.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.elastic = function (t) {
    return -1 * pow(4, -8 * t) * sin((t * 6 - 1) * PI) + 1;
  };

  /**
   * Flicker.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.flicker = function (t) {
    t = t + (random() - 0.5) * 0.2;
    return sinusoidal(t < 0 ? 0 : t > 1 ? 1 : t);
  };

  /**
   * Mirrow.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.mirror = function (t) {
    t = t < 0.5 ? 2 * t : 1 - (t - 0.5) * 2;
    return 0.5 -cos(t * PI) * 0.5;
  };

  /**
   * Out.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.out = function (t) {
    return sin(t * PI_div_2);
  };

  /**
   * Pulse.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.pulse = function (t, pulses) {
    pulse = pulse || 5;
    return 0.5 - cos((t * (pulses - 0.5) * 2) * PI) * 0.5;
  };

  /**
   * Sinusoidal.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.sinusoidal = function (t) {
    return 0.5 -cos(t * PI) * 0.5;
  };

  /**
   * Spring.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.spring = function (t) {
    return 1 - (cos(t * 4.5 * PI) * exp(-t * 6));
  };

  /**
   * Strong in.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.strong.in = function (t) {
    return (t === 0) ? 0 : pow(2, 10 * (t - 1));
  };

  /**
   * Strong out.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.strong.out = function (t) {
    return (t === 1) ? 1 : 1 - pow(2, -10 * t);
  };

  /**
   * Swing from.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.swing.from = function (t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  };

  /**
   * Swing to.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.swing.to = function (t) {
    var s = 1.70158;
    t -= 1;
    return t * t * ((s + 1) * t + s) + 1;
  };

  /**
   * Wobble.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.wobble =  function (t) {
    return 0.5 -cos(t * PI * (9 * t)) * 0.5);
  };

}(this));
