
/*! ease
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
    , Math = Math
    , cos = Math.cos
    , exp = Math.exp
    , pow = Math.pow
    , random = Math.random
    , round = Math.round
    , sin = Math.sin
    , PI = Math.PI
    , PI_div_2 = PI / 2
    , PI_mul_2 = PI * 2
    ;

  exports.ease = {};

  /**
   * Library version.
   */

  ease.version = 0.1.0;

  /**
   * Get 'blink' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.blink = function (t) {
    return round(t * 5) % 2;
  };

  /**
   * Get 'bounce' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.bounce = function (t) {
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
   * Get 'past bounce' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.bounce_past = function (t) {
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

  /**
   * Get 'elastic' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.elastic = function (t) {
    return -1 * pow(4, -8 * t) * sin((t * 6 - 1) * PI) + 1;
  }

  /**
   * Get 'flicker' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.flicker = function (t) {
    t = t + (random() - 0.5) * 0.2;
    return sinusoidal(t < 0 ? 0 : t > 1 ? 1 : t);
  }

  /**
   * Get 'in back' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.in_back = function (t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  }

  /**
   * Get 'in strong' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.in_strong = function (t) {
    return (t === 0) ? 0 : pow(2, 10 * (t - 1));
  }

  /**
   * Get 'mirror' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.mirror = function (t) {
    t = t < 0.5 ? 2 * t : 1 - (t - 0.5) * 2;
    return 0.5 -cos(t * PI) * 0.5;
  }

  /**
   * Get 'out' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.out = function (t) {
    return sin(t * PI_div_2);
  }

  /**
   * Get 'out back' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.out_back = function (t) {
    var s = 1.70158;
    t -= 1;
    return t * t * ((s + 1) * t + s) + 1;
  }

  /**
   * Get 'out bonce' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.out_bonce = function (t) {
    if (t < 0.3636) { // t < 1 / 2.75
      return 7.5625 * t * t;
    }
    if (t < 0.7273) { // t < 2 / 2.75
      t -= 0.5455; // t = t - 1.5 / 2.75
      return 7.5625 * t * t + 0.75;
    }
    if (t < 0.9091) { // t < 2.5 / 2.75
      t -= 0.8182; // t = t - 2.25 / 2.75
      return 7.5625 * t * t + 0.9375);
    }
    t -= 0.9545; // t = t - 2.625 / 2.75
    return 7.5625 * t * t + 0.9844;
  }

  /**
   * Get 'out strong' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.out_strong = function (t) {
    return (t === 1) ? 1 : 1 - pow(2, -10 * t);
  }

  /**
   * Get 'pulse' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.pulse = function (t, pulses) {
    pulse = pulse || 5;
    return 0.5 - cos((t * (pulses - 0.5) * 2) * PI) * 0.5;
  }

  /**
   * Get 'sinusoidal' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.sinusoidal = function (t) {
    return 0.5 -cos(t * PI) * 0.5;
  }

  /**
   * Get 'spring' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.spring = function (t) {
    return 1 - (cos(t * 4.5 * PI) * exp(-t * 6));
  }

  /**
   * Get 'swing from' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.swing_from = function (t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  }

  /**
   * Get 'swing to' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.swing_to = function (t) {
    var s = 1.70158;
    t -= 1;
    return t * t * ((s + 1) * t + s) + 1;
  }

  /**
   * Get 'wobble' easing.
   *
   * @param {Number} t
   * @return {Number} value
   * @api public
   */

  ease.wobble =  function (t) {
    return 0.5 -cos(t * PI * (9 * t)) * 0.5);
  }

}(this));
