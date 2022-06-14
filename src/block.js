import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('sbc/image-box', {
	title: __('Image Box', 'sbc'),
	apiVersion: 2,
	edit: Edit,
	save: Save,
	attributes: {
		headingBoxShadow: {
			default: {
				color: '#000',
				horizontal: 0,
				vertical: 0,
				blur: 10,
				spread: 0,
				enable: false,
			},
			type: 'object',
		},
		paragraphBoxShadow: {
			default: {
				color: '#000',
				horizontal: 0,
				vertical: 0,
				blur: 10,
				spread: 0,
				enable: false,
			},
			type: 'object',
		},
	},
});
