'use strict';

const Calendar = require('./calendar');

class Barmen {
	constructor(cupboard) {
		this._cupboard = cupboard;
	}

	pour(drinkName, volume, visitor, calendar = new Calendar) {
		if (!this._cupboard.hasDrink(drinkName, volume)) {
			throw new Error('Sorry. Not enough ' + drinkName);
		}

		const drinkInGlass = this._cupboard.getDrink(drinkName, volume);

		if (calendar.today === visitor.birthdate) {
			return 3 * drinkInGlass;
		}

		return drinkInGlass;
	}
}

module.exports = Barmen;