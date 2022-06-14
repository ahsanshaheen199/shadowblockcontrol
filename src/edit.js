import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ShadowControl from './shadowcontrol';

const Edit = ({ attributes, setAttributes }) => {
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<ShadowControl
					shadow={attributes.headingBoxShadow}
					onChange={(value) => {
						setAttributes({
							headingBoxShadow: { ...value },
						});
					}}
				/>
				<ShadowControl
					shadow={attributes.paragraphBoxShadow}
					onChange={(value) => {
						setAttributes({
							paragraphBoxShadow: { ...value },
						});
					}}
				/>
			</InspectorControls>
			<h2>Hello</h2>
		</div>
	);
};

export default Edit;
