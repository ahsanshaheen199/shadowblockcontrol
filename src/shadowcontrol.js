import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	ColorPalette,
	Dashicon,
	Popover,
	RangeControl,
} from '@wordpress/components';

import './shadowcontrol.scss';

const shadowDefaultValue = {
	color: '#000',
	horizontal: 0,
	vertical: 0,
	blur: 10,
	spread: 0,
	enable: false,
};

function ShadowControl({ shadow, onChange }) {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [shadowValue, setShadowValue] = useState({
		color: shadow?.color || '#000',
		horizontal: shadow?.horizontal || 0,
		vertical: shadow?.vertical || 0,
		blur: shadow?.blur || 10,
		spread: shadow?.spread || 10,
		enable: shadow?.enable || false,
	});
	return (
		<div className="box-shadow-control">
			<div className="control-label-wrapper">
				<h3>{__('Box Shadow', 'sbc')}</h3>
				<div className="button-wrapper">
					{shadowValue.enable && (
						<Button
							onClick={() => {
								setShadowValue({
									...shadowDefaultValue,
								});
								onChange({
									...shadowDefaultValue,
								});
								setPopoverOpen(false);
							}}
						>
							<Dashicon icon="image-rotate" />
						</Button>
					)}

					<Button
						onClick={() => {
							onChange({ ...shadowValue, enable: true });
							setShadowValue({ ...shadowValue, enable: true });
							setPopoverOpen(!popoverOpen);
						}}
						isPressed={popoverOpen === true}
						variant="secondary"
					>
						<Dashicon icon="edit" />
					</Button>
				</div>
				{popoverOpen && (
					<Popover>
						<div className="box-shadow-controls-wrapper">
							<h4>{__('Color', 'sbc')}</h4>
							<ColorPalette
								value={shadowValue.color}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										color: value,
									});
									onChange({
										...shadowValue,
										color: value,
									});
								}}
								enableAlpha={true}
								colors={[
									{ name: 'black', color: '#000' },
									{ name: 'white', color: '#fff' },
								]}
							/>
							<RangeControl
								label={__('Horizontal', 'sbc')}
								value={shadowValue.horizontal}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										horizontal: value,
									});
									onChange({
										...shadowValue,
										horizontal: value,
									});
								}}
								max={100}
							/>
							<RangeControl
								label={__('Vertical', 'sbc')}
								value={shadowValue.vertical}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										vertical: value,
									});
									onChange({
										...shadowValue,
										vertical: value,
									});
								}}
								max={100}
							/>
							<RangeControl
								value={shadowValue.blur}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										blur: value,
									});
									onChange({
										...shadowValue,
										blur: value,
									});
								}}
								label={__('Blur', 'sbc')}
								max={100}
							/>
							<RangeControl
								value={shadowValue.spread}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										spread: value,
									});
									onChange({
										...shadowValue,
										spread: value,
									});
								}}
								label={__('Spread', 'sbc')}
								max={100}
							/>
						</div>
					</Popover>
				)}
			</div>
		</div>
	);
}

export default ShadowControl;
