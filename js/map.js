// Инициализация карты
ymaps.ready(init);

function init() {

	//Центрирование и выбор масштаба карты
	var myMap = new ymaps.Map('map', {
		center: [59.986287, 30.203919],
		zoom: 15
	});

	// Создание своей метки
	var myPlacemark = new ymaps.Placemark(
		// Координаты метки
		[59.986287, 30.203919], {

	}, {
			iconImageHref: 'img/pin-map.svg',  // картинка иконки
			iconImageSize: [36, 41],       

	});

	// Добавление метки на карту
	myMap.geoObjects.add(myPlacemark);

	//Элементы управления
	myMap.controls
		// Кнопка изменения масштаба
		.add('zoomControl')
		// Список типов карты
		.add('typeSelector')
		// Кнопка изменения масштаба - справа
		.add('smallZoomControl', { right: 5, top: 75 })
		// Стандартный набор кнопок
		.add('mapTools')
		//Линейка масштаба
		.add(new ymaps.control.ScaleLine());
}