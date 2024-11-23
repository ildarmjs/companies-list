import { useEffect } from 'react';

export const useInfinityScroll = (callback: () => void) => {
	useEffect(() => {
		const scrollHandler = (e: Event) => {
			const target = e.target as Document;
			if (
				target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
				100
			) {
				callback();
			}
		};

		document.addEventListener('scroll', scrollHandler);
		return () => {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, [callback]);
};