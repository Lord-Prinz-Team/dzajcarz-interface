const ImageAttachment = (props) => {
	return (
		<img
			src={props.src}
			alt={props.name}
			className="mt-3 w-full max-w-2xl cursor-pointer"
			{...props}
		/>
	);
};

export default ImageAttachment;
