let user = ["AKIMANA Diella Shalom","ALI Nouredine","AMARA Anfal Marya","BRINKMANS Matthys","BUTOR-BLAMONT Maël","DEVRIN Lucas","EL HAMDANI Donya","GARNIER Killian","JANSSENS Antoine","KISTEN Povalum","MALFAIT Léo","TAMZAIT Yanis"];

user.sort((a,b) => Math.random()-.5);

const group = [];

group.push([user[0],user[1],user[2]]);
group.push([user[3],user[4],user[5]]);
group.push([user[6],user[7],user[8]]);
group.push([user[9],user[10],user[11]]);

console.log(group);
