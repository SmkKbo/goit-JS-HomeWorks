const images = [
	{
		url:
			'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url:
			'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url:
			'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
];

const galleryImageList = image => {
	const listRef = document.createElement('li');
	listRef.classList.add('gallery-list');

	const imageRef = document.createElement('img');
	imageRef.classList.add('gallery-list__animal');
	imageRef.src = image.url;
	imageRef.alt = image.alt;

	listRef.append(imageRef);
	return listRef;
};

const imageGalleryCards = images.map(image => galleryImageList(image));

const containerRef = document.querySelector('#gallery');
containerRef.classList.add('gallery');
console.log(containerRef);

containerRef.append(...imageGalleryCards);