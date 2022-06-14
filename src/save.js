import { useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return <div {...useBlockProps.save()}>Hello</div>;
};

export default Save;
