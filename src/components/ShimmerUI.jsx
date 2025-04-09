export const ShimmerUI = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
			{[...Array(8)].map((_, idx) => (
				<div key={idx} className="h-40 bg-gray-300 rounded animate-pulse"></div>
			))}
		</div>
	);
}