// The equations defined here are open source under BSD License.
// http://www.robertpenner.com/easing_terms_of_use.html (c) 2003 Robert Penner
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

function out (t) {
	return sin(t * PI_div_2);
}

function out_strong (t) {
	return (t === 1) ? 1 : 1 - pow(2, -10 * t);
}

function in (t) {
	return t * t;
}

function in_strong (t) {
	return (t === 0) ? 0 : pow(2, 10 * (t - 1));
}

function out_bonce (pos) {
	if ((pos) < (1/2.75)) {
		return (7.5625 * pos * pos);
	} else if (pos < (2/2.75)) {
		return (7.5625 * (pos-=(1.5/2.75)) * pos + .75);
	} else if (pos < (2.5/2.75)) {
		return (7.5625 * (pos-=(2.25/2.75)) * pos + .9375);
	} else {
		return (7.5625 * (pos-=(2.625/2.75)) * pos + .984375);
	}
}

function in_back (pos) {
	var s = 1.70158;
	return pos * pos * ((s + 1) * pos - s);
}

function out_back (pos) {
	var s = 1.70158,
		pos = pos - 1;
	return pos * pos * ((s + 1) * pos + s) + 1;
}

function bounce (t) {
	if (t < (1 / 2.75)) {
		return 7.5625 * t * t;
	}
	if (t < (2 / 2.75)) {
		return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
	}
	if (t < (2.5 / 2.75)) {
		return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
	}
	return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
}

function bounce_past (pos) {
	if (pos < (1 / 2.75)) {
		return (7.5625 * pos * pos);
	} else if (pos < (2 / 2.75)) {
		return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + .75);
	} else if (pos < (2.5 / 2.75)) {
		return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + .9375);
	} else {
		return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + .984375);
	}
}

function swing_to (pos) {
	var s = 1.70158,
		pos = pos - 1;
	return pos * pos * ((s + 1) * pos + s) + 1;
}

function swing_from (pos) {
	var s = 1.70158;
	return pos * pos * ((s + 1) * pos - s);
}

function elastic (pos) {
	return -1 * pow(4, -8 * pos) * sin((pos * 6 - 1) * (2 * PI) / 2) + 1;
}

function spring (pos) {
	return 1 - (cos(pos * 4.5 * PI) * exp(-pos * 6));
}

function blink (pos, blinks) {
	return round(pos * (blinks || 5)) % 2;
}

function pulse (pos, pulses) {
	return (-cos((pos * ((pulses || 5) - 0.5) * 2) * PI)/2) + 0.5;
}

function wobble (pos) {
	return (-cos(pos * PI * (9 * pos))/2) + 0.5;
}

function sinusoidal (pos) {
	return (-cos(pos * PI)/2) + 0.5;
}

function flicker (pos) {
	var pos = pos + (random() - 0.5)/5;
	return sinusoidal(pos < 0 ? 0 : pos > 1 ? 1 : pos);
}

function mirror (pos) {
	if (pos < 0.5) {
		return sinusoidal(pos * 2);
	}
	return sinusoidal(1 - (pos - 0.5) * 2);
}