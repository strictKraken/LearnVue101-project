import $ from 'jquery';

function inverseColor() {
		let $itemInverse = $('[burger]');
		let $itemInversePosition = $($itemInverse)[0].getBoundingClientRect();
		let $blockInversePosition = $('[inverse]')[0].getBoundingClientRect();
		if($itemInversePosition.bottom >= $blockInversePosition.top + $($itemInverse).height() / 2) {
			$($itemInverse).addClass('inverse');
			return true;

		} else {
			$($itemInverse).removeClass('inverse');
			return false;
		}	
}

export {inverseColor};