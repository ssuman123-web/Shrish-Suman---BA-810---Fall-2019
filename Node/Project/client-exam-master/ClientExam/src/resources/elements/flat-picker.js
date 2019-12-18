import {inject, bindable, bindingMode} from 'aurelia-framework';
import Flatpickr from 'flatpickr';


@inject(Element)
export class FlatPickerCustomElement {
    backgroundColor = 'white';
    @bindable config = {};
    @bindable startdate;
    @bindable enddate
    @bindable controlid;
    @bindable disabled;
    @bindable({defaultBindingMode: bindingMode.twoWay}) value;

    constructor(element) {
        this.element = element;
    }

	bind() {
		const defaultConfig = {
			altInput: true,
			altFormat: "F j, Y",
			minDate: this.startdate,
            maxDate: this.enddate,
            wrap: true,
            onReady: function(dateObj, dateStr, instance) {
                var $cal = $(instance.calendarContainer);
                if ($cal.find('.flatpickr-clear').length < 1) {
                    $cal.append('<div class="flatpickr-clear">Clear</div>');
                    $cal.find('.flatpickr-clear').on('click', function() {
                        instance.clear();
                        instance.close();
                    });
                }
            }
		};

		this._config = Object.assign({}, defaultConfig, this.config);
		this._config.onChange = this._config.onMonthChange = this._config.onYearChange = this.onChange.bind(this);
	}

	attached() {
		this.flatpickr = new Flatpickr(this.element.querySelector('.aurelia-flatpickr'), this._config);
		this.valueChanged();
	}

	fireEvent(element, type, data) {
		   let changeEvent;

			if (window.CustomEvent) {
				changeEvent = new CustomEvent('change', {
					detail: {
						value: data
					},
					bubbles: true
				});
			} else {
				changeEvent = document.createEvent('CustomEvent');
				changeEvent.initCustomEvent('change', true, true, {
					detail: {
						value: data
					}
				});
			}
			this.element.dispatchEvent(changeEvent);
	}

	startdateChanged(newValue, oldValue) {
		if(this.flatpickr){
			this.flatpickr.set("minDate", newValue);
		}
	}

	enddateChanged(newValue, oldValue) {
		if(this.flatpickr){
			this.flatpickr.set("maxDate", newValue);
		}
    }

    onChange(selectedDates, dateStr, instance) {
        if (!this._datesAreSynced(this.value, selectedDates)) {

            switch(selectedDates.length) {
                case 0:
                    this.value = undefined;
                    break;
                case 1:
                    this.value = this._cloneDate(selectedDates[0]);
                    break;
                default:
                    this.value = selectedDates.map(d => this._cloneDate(d));
                    break;
            }
        }
		this.fireEvent(this.element, 'changeBeginDate', { date: this.value });
    }

    clear(){
         if (!this.flatpickr) {
            return;
        }

        // this.flatpickr.clear();
    }

    valueChanged() {
        if (!this.flatpickr) {
            return;
        }

        if (this._datesAreSynced(this.value, this.flatpickr.selectedDates)) {
            return;
        }

        let newDate;

        if (!this.value) {
            newDate = undefined;
        }
        else if (!Array.isArray(this.value)) {
            newDate = this._cloneDate(this.value);
        }
        else {
            newDate = this.value.map(d => this._cloneDate(d));
        }

        this.flatpickr.setDate(newDate);
    }

    _datesAreSynced(model, view) {
        model = model || [];

        let modelDates = Array.isArray(model) ? model : [model];

        for(let d = 0; d < modelDates.length; d++) {
            let modelDate = modelDates[d];

            if (view.findIndex(v => v.valueOf() === modelDate.valueOf()) > -1) {
                continue;
            }

            return false;
        }

        for(let d = 0; d < view.length; d++) {
            let viewDate = view[d];

            if (modelDates.findIndex(m => m.valueOf() === viewDate.valueOf()) > -1) {
                continue;
            }

            return false;
        }

        return true;
    }

    _cloneDate(d) {
        return new Date(d.getTime ? d.valueOf() : d);
    }
}
