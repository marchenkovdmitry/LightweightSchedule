# LightweightSchedule

![previewImgMain](https://marchenkovdmitry.com/projects/raspisanie/github_img/OZIKYKGwI98.jpg "")

Что это?
========================

Простое и удобное расписание пар, которое имеет множество полезных и приятных функций. А также достаточно легкое, чтобы быстро
работать на любом устройстве. 

Для чего оно?
========================

Это расписание было создано из-за крайней неудобности пользования расписанием, которое выложено на сайте университета. Приходилось нарезать его на картинки и носить с собой на телефоне, что очень неудобно. Поэтому пришла идея сделать веб-версию. Главным требованием была кроссбраузерность/кроссплатформенность, и малый размер. В ходе разработки добавлялись всякие приятные мелочи и исправлялись ошибки. 


Функционал
========================

1. Можно включить/выключить отображение бокового меню и/или подсветки числителей/знаменателей. Выбор пользователя сохраняется в html5 localDataStorage и не сбрасывается при повторной загрузке страницы.
2. Автоматическое скрытие бокового меню на низком разрешении.
3. Полные ФИО преподавателй при наведении мыши на сокращенные ФИО. (По касанию в мобильной версии)
4. Изменяемый пользователем фон (Светлая (включена по умолчанию) и темная версия)
5. Автоматический скроллинг до текущего дня недели. В выходные ничего не делает(когда включен)
6. Навигация по предметам с клавиатуры (1-понедельник, 5-пятница итд.)
7. Автоматическое определение числителя/знаменателя недели и подсветка нужных предметов (Можно отключить)
8. Работает и в оффлайне (Использует Application Cache API)

Технические детали
========================

1. Все иконки, кроме фона, теперь на svg (от англ. Scalable Vector Graphics)
2. Для большей плавности прикрутил transition к элементам интерфейса.
3. Оптимизировал время анимации opacity, для визуального ускорения работы интерфейса.
4. Все функции переписаны с jQuery на чистый JavaScript. В результате код сбросил около 70кб, что для медленного мобильного интернета весьма критично.
5. Оптимизированы CSS селекторы.
6. Все разбросанные по js коду переменные и функции вынесены в один блок.
7. Добавлены иконки во всех мыслимых разрешениях для любого типа устройств. Теперь не стыдно добавить в закладки :)
8. Отдаваемые пользователю html/css/js сжаты. Для css выигрыш в размере составил 36.65% Для js: 27.73%
9. Исправлен баг с кликабельными ссылками меню, при отсутствующем оформлении меню.
10. Сменил хостинг с облачного хранилища selectel на elasticweb (nginx), что существенно улучшило время загрузки (среднее время ответа сервера 8ms). 
11. Установил полученный еще два месяца назад SSL сертификат. 
12. Создан поддомен http://raspisanie.marchenkovdmitry.com (Может ругаться на отсутствие SSL сертификата)
13. Поправлены обьявления переменных и код переведен на "use strict"
14. Добавлены кнопки изменения подсветки и фона в мобильной версии.
15. Поправлена подсветка на темной теме (был реверс цвета числителей/знаменателей)
16. Оптимизация производительности (Теперь на телефонах работает со скоростью света)
17. Почти все условия переписаны на switch (до +30% улучшение производительности на gecko)
18. Наиболее часто повторяющиеся части кода собраны в отдельную функцию.
19. Плавное изменение фона на transition.
20. Переписано определение четности недели (расширен стандартный объект Date())
21. Подключена библиотека "fastclick" (Убирает 300мс задержку клика на мобильных устройствах) https://github.com/ftlabs/fastclick

Живое демо
========================
http://marchenkovdmitry.com/projects/raspisanie/
зеркало:
http://raspisanie.marchenkovdmitry.com

Скриншоты
========================
![previewImg1](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture1.JPG "")
![previewImg2](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture2.JPG "")
![previewImg3](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture3.JPG "")
![previewImg4](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture4.JPG "")
![previewImg5](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture5.JPG "")
![previewImg6](https://marchenkovdmitry.com/projects/raspisanie/github_img/Capture6.JPG "")

