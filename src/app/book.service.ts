import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

  private books: Book[] = [{
    id: 1,
    name: 'Windstorm',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg/350px-Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg',
    genre: 'Драмма',
    description: 'sdfasf',
    links: []
  }, {
    id: 2,
    name: 'Гарри Поттер и Филосовский камень',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROsEKHZXGK1j21x0maJrptJ_MqDDx2l-TbQ4diEoQzZT9MSTG',
    genre: 'Роман',
    description: `Родители Гарри Поттера, который является потомком братьев Певереллов, — волшебники — мракоборцы Лили (Эванс) Поттер и Джеймс Поттер. Лучший друг Джеймса Поттера и его однокурсник, анимаг Сириус Блэк, стал крёстным отцом Гарри.
    
    До рождения Гарри в 1980 году провидица Сивилла Трелони произнесла в беседе с главой Хогвартса Дамблдором пророчество о том, что в конце июля родится мальчик, родители которого три раза бросали вызов вступившему на путь зла бывшему ученику Хогвартса Волан-де-Морту, и который или сможет победить Тёмного Лорда, или погибнет от его рук. Под условия пророчества подходили Гарри Поттер и родившийся на день раньше сын мракоборцев Фрэнка и Алисы Невилл Долгопупс. Лорд Волан-де-Морт, узнав о пророчестве от своего сторонника Северуса Снегга, решил уничтожить ребёнка, выбрав Гарри. Лили и Джеймс Поттеры использовали заклятие доверия, сделав Хранителем Тайны Сириуса Блэка, но в последний момент, Блэку удалось уговорить семейную чету передать тайну укрытия Лили, Джеймса и Гарри, другому анимагу — Питеру Петтигрю, который предал их.
    
    В следующем году вечером 31 октября Тёмный Лорд, узнав о местоположении Гарри, появился в Годриковой Впадине и напал на семью. Джеймс пытался защитить семью, но погиб от заклятия Авада Кедавра. По просьбе Северуса Снегга Тёмный Лорд собирался пощадить Лили, но она встала на его пути, защищая ребёнка. Тогда он убил и её. Когда Волан-де-Морт попробовал убить Гарри, Древнее заклинание защиты Лили отразило заклинание, оставив только шрам на лбу Гарри и ударив по Волан-де-Морту, Это нейтрализовало его на много лет, и в результате образовался последний крестраж, которым стал Гарри, получивший шрам в виде молнии на лбу. Это была первая попытка убить Гарри Поттера. Ребёнка забрал с места трагедии Рубеус Хагрид и оставил его на пороге дома родственников — семьи Дурслей.
    
    Первые 10 лет своей жизни Гарри жил, не подозревая о существовании магии. Дурсли держали его в подчинении и угнетении, надеясь таким образом нейтрализовать способности к волшебству, которые они считали ненормальными. Однако, несмотря на это, Гарри иногда проявлял магические способности, за что его каждый раз наказывали.
    
    В одиннадцатый день рождения ему стали приходить письма из Хогвартса, но Дурсли уничтожали их, не позволяя Гарри их читать. Из-за этого письма приходили снова. Кончилось это тем, что Дурслей и Гарри, попытавшихся спрятаться от писем в хижине на острове посреди моря, посетил получеловек — полувеликан Хагрид, который рассказал мальчику всё о его прошлом и о мире волшебников. Вместе с ним Гарри посетил Косой переулок, чтобы купить все необходимое для школы, а заодно и познакомился с мастером изготовления палочек Олливандером. Помимо магазинов, в Косом переулке Хагрид и Гарри посетили отделение банка Гринготтс, и Гарри с удивлением узнал, что он богат. Там же Хагрид забрал философский камень, созданный Николасом Фламелем. Месяц спустя Гарри сел на Хогвартс-экспресс и прибыл в Хогвартс.
    
    В поезде, едущем в Хогвартс, Гарри Поттер познакомился с Роном, Фредом и Джорджем Уизли и Гермионой Грейнджер. Сын Пожирателя Смерти Люциуса Малфоя Драко Малфой также предложил ему дружбу (они встречались до этого в магазине мадам Малкин, находящимся в Косом переулке), но Гарри не понравились его совет не дружить с Роном и презрительное отношение к Хагриду. Гарри и Драко поссорились, и с тех пор Драко стал его врагом.
    
    Перед тем, как Рон сказал что все злые колдуны и волшебники поступают на Слизерин, Распределяющая шляпа предложила Гарри отправиться в Слизерин, но он отказался. Тогда она отправила его в Гриффиндор, куда также попали Рон с Гермионой.
    
    На первом курсе Гарри и Рон подружились с Гермионой Грейнджер. Профессор зельеварения Северус Снегг возненавидел Гарри из-за сложных отношений с его отцом Джеймсом, с которым раньше учился в школе чародейства. На первом курсе Гарри не знал причин этой ненависти.
    
    У Гарри обнаружился выдающийся талант к полётам на метле. Он был принят ловцом в команду Гриффиндора по квиддичу, став самым молодым ловцом за последние 100 лет. В дальнейшем Гарри оказался отличным игроком (подробнее см. статью квиддич).
    
    Во время первой из игр метла начала сбрасывать Гарри в результате колдовства слабого и наивного профессора защиты от тёмных искусств Квиррелла, служившего Волан-де-Морту. Снегг защищал Гарри своей магией. Благодаря Гермионе, поджегшей мантию Снегга и из-за сильной спешки это сделать, она случайно сбила с ног Квиррелла, проклятие прекратило действовать и метла перестала сбрасывать Поттера. Так закончилась неудачей вторая попытка убить Гарри.
    
    Третья такая попытка произошла после того, как Гарри при поддержке друзей пробрался в комнату, где находился философский камень. Оказалось, что его хочет украсть Квиррелл, в которого вселился Волан-де-Морт. Цель кражи — возрождение Волан-де-Морта. Гарри сумел помешать Квирреллу украсть камень и, благодаря магической защите, продержаться в битве против Квиррелла до прихода Альбуса Дамблдора, спасшего Гарри. С помощью зеркала Еиналеж Гарри получил философский камень, который после этого был уничтожен. Квиррелл погиб, а Волан-де-Морт не смог возродиться. Так провалилась третья попытка убить Гарри Поттера.
    
    Благодаря тому, что Альбус Дамблдор присудил Рону, Гермионе, Невиллу и Гарри дополнительных 170 баллов в конце года, факультет выиграл соревнование.`,
    links: ['http://ru.harrypotter.wikia.com/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%9F%D0%BE%D1%82%D1%82%D0%B5%D1%80', 'http://www.hp-lexicon.org/character/potter-family/harry-potter/']
  }];
  constructor() { }

  getBooks() {
    return this.books;
  }

  addBook(book: Book){
    book.id = this.books.length != 0 ? this.books[this.books.length -1].id +1 : 1;
    this.books.push(book);
  }
}
