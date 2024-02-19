// Question No 1:
// Install Node.js, TypeScript and VS Code on your computer.
// // Question No 2;
// Personal Message:
// let personName = "";
// personName = prompt('What is Your Name?') || "";
// if (personName !== null && personName !== '') {
//     alert(`“Hello ${personName}, would you like to learn some Python today?”`);
// }
// else {
//     alert('You have to fill your name !');
// }
// // Question No 3:
// Name Cases: 
// let nameCase :String = '';
//  nameCase = prompt('What is your name?') || '';
// let lowercase :string = nameCase.toLowerCase();
// let uppercase :string = nameCase.toUpperCase();
// let titlecase :string = nameCase.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); 
// if(nameCase !== null && nameCase !== ''){
//     alert(`Hello ${nameCase}, Here are your name in:lowerCase: ${lowercase}
//     Uppercase : ${uppercase}
//     LowerCase : ${lowercase}
//     TitleCase: ${titlecase}`)
// }
// else {
//     alert('Please Fill Your Name !')
// }
// // Question No 4;
// Famous Quote:
// console.log('Albert Einstein once said,"A person who never mistake never tried anything new"')
// // Question No 5;
// Famous Quote 2:
// let famous_person :string = 'Albert Einstein';
// let text :string = '"A person who never made a mistake never tried anything new."'
// console.log(`${famous_person} once said, ${text}`);
// // Question No 6;
// Stripping Names: 
// let Name :string = "\n\t Aiza Nadeem \t\n "
// console.log(Name);
// // Question No 7;
// Number Eight: 
// // Addition
// console.log(5+3); 
// // Subtraction
// console.log(10-2); 
// // Multiplication
// console.log(4*2); 
// //Divide
// console.log(16/2); 
// // Question No 8:
// // Addition
// console.log(5+3); 
// // Subtraction
// console.log(10-2); 
// // Multiplication
// console.log(4*2); 
// //Divide
// console.log(16/2); 
// Question No 9:
// /Favorite Number:
// let favourite_Number :number = 10;
// const message :string = "Here Is Your Favourite Number" + favourite_Number;
// console.log(message);
// // Question No 10;
// Adding Comments:
// Program Written By :Aiza Nadeem;
//  Date: 2/16/2024
// This program will written Hello Eric!;
// console.log("Hello Eric!");
// // Question No 11;
// Names:
// let names :string[] = ["Aiza","Areeba","Yusra","Rabia"];
// for(let i=0; i<names.length; i++) {
//     console.log(names[i]);
// } 
// // Question No 12;
// Greetings:
// let news :string[] = ["Neha","Rahimeen","Kabshah","Fatima"];
// const message :string = 'Wellcome To The Governor Sindh IT Initiative:';
// for(let a=0; a<news.length; a++) {
//     console.log(message + news[a]);
// }
// // Question No 13;
// Your Own Array: 
// let transportation :string[] = ["Bike","Car","Train","Aeroplane","Cycle"];
// for(let b=0; b<transportation.length; b++){
//     console.log('I would like to Own a ' + transportation[b])
// }
// // Question No 14;
//Guest List: 
// let guest_List :string[] = ["Aiza","Areeba","Wajahat","Ahmed"]
// for(let a=0; a<guest_List.length; a++){
//     console.log(` Dear ${guest_List[a]}: I am Inviting You For a Today Dinner`)
// }
// Question No 15;
//Changing Guest List: 
// let guest_List :string[] = ["Aiza","Areeba","Wajahat","Ahmed"]
// for(let a=0; a<guest_List.length; a++){
//     console.log(` Dear ${guest_List[a]}: I am Inviting You For a Today Dinner`)
// }
// let absent_Guest :string = "Aiza";
// let add_Guest :string = "Neha";
//  guest_List[0] = add_Guest ;
//  for(let a=0; a<guest_List.length; a++){
//     console.log(` Dear ${guest_List[a]}: I am Inviting You For a Today Dinner`)
// }
// console.log(` Mr ${absent_Guest} is not coming to the Dinner.`)
// Question No 16:
// More Guests:
// let Guest_List :Array<string> = [
//     "Zia Ullah Khan",
//     "Daniyal Nagori",
//     "Kamran Tesorri",
// ];
// for(let guest of Guest_List) {
//     console.log(`Hello, ${guest}, We Found a Bigger Dinner table. `)
// }
// let newGuestAtBeginnibg: string = "Imran "
// Guest_List.unshift(newGuestAtBeginnibg)
// console.log(Guest_List)
// const newGuestInMiddle:string = 'Asif Khan'
// let middleIndex:number = Math.floor(Guest_List.length/2)
// Guest_List.splice(middleIndex,0,newGuestInMiddle) 
// console.log(Guest_List)
// let newGuestAtEnd :string = "Wajahat Khan"
// Guest_List.push(newGuestAtEnd)
// console.log(Guest_List)
// console.log('New set of Invitation messages')
// for(let guest of Guest_List){
//     console.log(`Dear ${guest}, You are invted To Dinner `)
// }
// Question No 17:
// Shrinking Guest List:
// let Guest_List:Array<string> = [
//     'Imran ',
//     'Zia Ullah Khan',
//     'Asif Khan',
//     'Daniyal Nagori',
//     'Kamran Tesorri',
//     'Wajahat Khan'
//   ]
//   console.log(`I can Invite Only Two Person For a Dinner`)
//   while (Guest_List.length > 2 ) 
//   {
//      let removeGuest = Guest_List.pop()
//      console.log(`Sorry ${removeGuest}, I cant Invite You to the Dinner` );
//   }
//   for(let guest of Guest_List){
//     console.log(`Hello, ${guest} , You are Still Invited TO the Dinner `)
//   }
//   Guest_List.pop()
//   Guest_List.pop()
//   console.log(`Guest List after Dinner` , Guest_List);
// Question No 18;
//Seeing the World: 
// Step 1:
// let travelDestination:string[] = [ "Switzerland","Turkey","Maldives","Makkah","Medina"]
// // Step 2:
// console.log("Orignal Order");
// console.log(travelDestination);
// // Step 3:
// console.log([...travelDestination].sort())
// // Step 4:
//   console.log(travelDestination)
// //   Step 5:
// console.log([...travelDestination].sort().reverse())
// // Step 6:
//   console.log(travelDestination)
// // Step 7:
// travelDestination.reverse()
// console.log(travelDestination)
// // Step 8:
// travelDestination.reverse()
// console.log(travelDestination)
// // Step 9:
// travelDestination.sort()
// console.log(travelDestination)
// // Step 10:
// travelDestination.sort().reverse()
// console.log(travelDestination)
// Question No 19:
// Dinner Guests: 
// let Guest_List :Array<string> = [
//     "Zia Ullah Khan",
//     "Daniyal Nagori",
//     "Kamran Tesorri",
// ];
// for(let o=0; o<Guest_List.length; o++) {
//   console.log(`We Had Finally invited ${Guest_List [o]}`)
// }
// Question No 20:
// Think of something you could store in a array.
// const countries:string[] = ["Australia","Pakistan","USA","Japan","China"]
// console.log("list Of Countries:")
// for ( let country of countries ) {
//   console.log(country)
// }
// Question No 21:
// They think of something you could store in a TypeScript Object.
// const bouquet = 
//  {
//   Name: "Rose",
//   PRICE: 1000,
//   DESTRUCTION: "Beautifull Flowers"
// }
// let bouquet: Array<typeof bouquet> = [];
// bouquet.push(bouquet);
// bouquet.push({name: "Rose", price:1000,description: "" });
// Question No 22:
// Intentional Error:
//  function createFruit(name: string, color:string,
//   taste: string){
//     return{
//       name,
//       color,
//       taste,
//     };
//   }
//   const fruit = [
//     createFruit("Apple","Red","Sweet"),
//     createFruit("Banana","Yellow","Sweet"),
//     createFruit("Grapes","Purple/Green","sour"),
//     createFruit("Orange","orange","citrusy"),
//     createFruit("Strawberry","Red","Sweet"),
//   ];
//    const invalidIndex = 10;
//    console.log(`Fruit at index ${invalidIndex}:`, fruit[invalidIndex]);
// fruit.forEach((fruit) => [
//   console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`)
// ]);
// export{};
// Question No 23:
// Conditional Tests:
// const str1: string = "Hello";
// const str2: string = "hello";
// console.log(str1 === str2);
// console.log(str1 !== str2);
// const text1: string = "Hello";
// const text2: string = "hello";
// console.log(text1.toLowerCase() === text2);
// const num1: number = 10;
// const num2: number = 5;
// console.log(num1 ===  num2);
// console.log(num1 !==  num2);
// console.log(num1 >  num2);
// console.log(num1 <  num2);
// console.log(num1 >=  num2);
// console.log(num1 <= num2);
// const x: number = 5;
// const y: number = 20;
// const z: number = 10;
// console.log(x < y && y < z);
// console.log(x < y  || y > z);
// console.log(x > y && y < z);
// console.log(x > y  || y > z);
// const fruits: string[] = ['apple','banana','orange','Grapes']
// console.log(fruits.includes('banana'));
// console.log(fruits.includes('kiwi'));
// const colors: string[] = ['red','green','blue','yellow'];
// console.log(!colors.includes('purple'));
// console.log(!colors.includes('green'));
// Question No 24:
// More Conditional Tests:
// Question No 25:
//Alien Colors #1:
//  let alien_color = 'green'
// if (alien_color == 'green') {
//   console.log("congratulations! you Just Earned 5 Points.")
// }
//  alien_color = 'blue'
// if (alien_color == 'green') {
//   console.log("congratulations! you Just Earned 5 Points.")
// }
// Question No 26:
// Alien Colors #2: 
// console.log('1st Version of code')
// let alien_color: string = 'green'
// if (alien_color == 'green') {
//     console.log("congratulations! you Just Earned 5 Points.")
//   }else{
//     console.log('congratulations! You just earned 10 points for shooting the alien.')
//   }
//   console.log('2nd Version of code')
//   alien_color = 'blue'
// if (alien_color == 'green') {
//     console.log("congratulations! you Just Earned 5 Points.")
//   }else{
//     console.log('congratulations! You just earned 10 points for shooting the alien.')
//   }
// Question No 27:
// Alien Colors #3: 
// let alien_color: string = 'green'
// if (alien_color == 'green') {
//       console.log("congratulations! you Just Earned 5 Points.")
//     }else if (alien_color === 'Yellow') {
//       console.log("congratulations! you Just Earned 10 Points.")
//     }else if (alien_color === 'red'){
//       console.log("congratulations! you Just Earned 10 Points.")
//     }else {
//       console.log('Unknown alien color.')
//     }
//     alien_color = 'Yellow';
//     if (alien_color === 'green')
//     {
//       console.log("congratulations! you Just Earned 5 Points.")
//     }
//     else if (alien_color === 'yellow')
//     {
//       console.log("congratulations! you Just Earned 10 Points.")
//     }else if ( alien_color === 'red') {
//       console.log("congratulations! you Just Earned 15 Points.")
//     }else {
//       console.log('Unknown alien color.')
//     }
//     console.log('2nd version where align color is red')
//     alien_color = 'red';
// Question No 28:
// Stages of Life: 
//  let age = 17
// if (age < 2) {
//   console.log('You are a baby')
// }else if (age < 4) {
//   console.log('You are a toddler')
// }else if (age < 13) {
//   console.log('You are a kid')
// }else if ( age < 20 ) {
//   console.log('You are a teenager')
// }else if ( age < 65){
//   console.log('You are Adult')
// }else {
//   console.log('You are a Elder')
// }
// Question No 29:
// Favorite Fruit:
//  let favorite_fruits = ['blueberries', 'salmonberries', 'peaches']
// if ('bananas' in favorite_fruits){
//   console.log("You really like bananas!")
// }
// if ('apples' in favorite_fruits){
//   console.log("You really like apples!")
// }
// if ('blueberries' in favorite_fruits){
//   console.log("You really like blueberries!")
// }
// if ('kiwis' in favorite_fruits){
//   console.log("You really like kiwis!")
// }
// if ('peaches' in favorite_fruits){
//   console.log("You really like peaches!")
// }
// Question No 30:
// Hello Admin:
//  const usernames = ['eric', 'willie', 'admin', 'erin', 'ever']
// for (let username in usernames){
//   if (username == 'admin'){
//     console.log("Hello admin, would you like to see a status report?")
//   }else{
//     console.log("Hello " + username + ", thank you for logging in again!")
//   }
// Question No 31: 
// No Users:
//  const usernames: ["aiza"]
// if username = {
//   for (let username in usernames)
// }
// if username == 'admin'{
// console.log("Hello admin, would you like to see a status report?"))
// }else {
//  console.log("Hello " + username + ", thank you for logging in again!")
// }else {
//   console.log("We need to find some users!") ;
// }
// Question No 32:
// Checking Usernames:
// let current_users = ['eric', 'willie', 'admin', 'erin', 'Ever']
//  let new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona']
//  let current_users_lower = [user.lower() for user in current_users]
// for (let new_user in new_users){
//   if new_user.lower() in current_users_lower:
//   console.log("Sorry " + new_user + ", that name is taken.")
// else:
//   console.log("Great, " + new_user + " is still available.")
// }
// Question No 33:
// Ordinal Numbers:
// let numbers = (range.(1,10));
// for (let number in numbers)
//   if number == 1 (
//     console.log("1st");
//   )else if == 2 (
//     console.log("2nd");
//   )else if == 3 (
//     console.log("3rd");
//   )else {
//     (str(number) + "th") 
//   }
// Question No 34;
// Pizzas:
// let favorite_pizzas = ['pepperoni', 'hawaiian', 'veggie']
// //  Print the names of all the pizzas.
// for (let pizza in favorite_pizzas){
//   console.log(pizza)
// }
//Print a sentence about each pizza.
// for (let pizza in favorite_pizzas) {
//   console.log("I really love " + pizza + " pizza!")
//   console.log("\nI really love pizza!")
// }
// Question No 35:
// Animals: 
//  let animals = ["spider monkey", "lemur", "giraffe"]
// //Print each animal.
// for (let animal in animals){
// console.log((animal))
// }
// // # Print a statement about each animal
// for(let  animal in animals) {
//       console.log(("A {animal} has a long tail."))
// }
// Question No 36:
// T-Shirt: 
//    const make_Shirt = (size , message);
//    ( """Summarize the shirt that's going to be made.""");
//     console.log("\nI'm going to make a " + size + " t-shirt.")
//     console.log('It will say, "' + message + '"')
//  let make_Shirt ('large', 'I love Python!');
//  let make_Shirt(message ="Readability counts.", size='medium');
// // Question No 37:
// // Large Shirts:
// let make_shirt(size ='large', newMessage ='I love Python!'):
//     console.log("\nI'm going to make a " + size + " t-shirt.")
//     console.log('It will say, "' + newMessage + '"')
// make_shirt();
// make_shirt(size='medium');
// make_shirt('small', 'Programmers are loopy.')
// // Question No 38:
// //Cities:
// let  describe_city(city, country='choice');
//     // """Describe a city."""
//     let msg = city.title() + " is in " + country.title() + "."
//     console.log(msg);
//  describe_city('santiago');
// describe_city('reykjavik', 'iceland');
// describe_city('punta arenas');
// Question No 39:
// City Names: 
// let city_country(city, country):
//     // """Return a string like 'Santiago, Chile'."""
//     return(city.title() + ", " + country.title())
// city = city_country('santiago', 'chile')
// console.log(city)
// city = city_country('ushuaia', 'argentina')
// console.log(city);
// city = city_country('longyearbyen', 'svalbard') 
// console.log(city)
// Question No 40;
// Album:
// function make_album(artist: string, title: string,tracks?: number):
//  {artist: string; title: string; tracks?: number}
//   const album = {
//     artist,
//     title,
//     tracks
//   };
// if (tracks !== undefined)
// {
//   album.tracks = tracks;
// }
//   return album;
//  }
//  const album1 = make_album('Vitel Signs','Mum Tum');
//  const album2 = make_album('Artist 2','Album 2',12);
//  const album3 = make_album('Artist 3','Album 3',8);
//  console.log(album1);
//  console.log(album2);
//  console.log(album3);
// Question No 41;
// Magicians:
// const magicianNames: string[] =  ["Harry porter","David copperfield","Hermione Granger", "professor Albus Dumbledore", "Ron Weasley"];
// function showMagicians(magicians: string[]): void {
//   for(const magician of magicians) {
//     console.log(magician);
//   }
// }
// showMagicians(magicianNames);
// Question No 42:
// Great Magicians:
// const magicianNames: string[] = ["Harry porter","David copperfield","Hermione Granger", "professor Albus Dumbledore", "Ron Weasley"];
// function showMagicians(magicians: string[]): void {
//   for(const magician of magicians) {
//     console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   const greatMagicians: string[] = magicians.map(magicians => `The Great ${magicians}`);
//   return greatMagicians;
// }
// const greatMagicianNames: string[] = make_great(magicianNames);
// console.log("original Magicians:");
// showMagicians(magicianNames);
// showMagicians(greatMagicianNames);
// Question No 43:
// Unchanged Magicians:
// const magicianName: string[] = ["Harry porter","David copperfield","Hermione Granger", "professor Albus Dumbledore", "Ron Weasley"];
// function showMagicians(magicians: string[]): void {
//   for(const magician of magicians) {
//     console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   const greatMagicians: string[] = magicians.map(magicians => `The Great ${magicians}`);
//   return greatMagicians;
// }
// const greatMagicianNames: string[] = make_great(magicianName);
// console.log("Orignal Magicians:");
// showMagicians(magicianName);
// showMagicians(greatMagicianNames);
// Question No 44;
// Sandwiches:
// function makeSandwich(...items: string[]): void {
//   console.log("sandwich Summary:");
//   if (items.length === 0) {
//     console.log("   -You ordered an empty Sandwich. Please Add some items.")
//   }else {
//     items.forEach((item, i) => {
//       console.log(`  ${i+ 1}. ${item}`);
//     }) ;
//     }
//   }
// Question No 45:
//Cars:
// function createCar(manufacturer: string, model: string, ...
//   properties: [string, any][]): any {
//     const Car: any = {
//       manufacturer,
//        model,
//     };
//     for ( const [key, value] of properties) {
//       Car[key] = value;
//     }
//     return Car;
//   }
//   const myCar: string = createCar("Toyota","Corolla", ["color","red"],["optionalFeature","sunroof"] ,["speed", "280 KM/hour"]);
//   console.log(myCar);
//Q Intentional Error
