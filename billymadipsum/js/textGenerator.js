$(document).ready(function() {

	//ipsum that shit
	$('.ipsum_btn').click(make_the_ipsum);
	$('input[name=lengthType]').change(function(){
		switch($(this).val()){
			case 'para':
				$('input[name=ipsumLength]').val(5);
				break;
			case 'char':
				$('input[name=ipsumLength]').val(140);
				break;
			default:
				$('input[name=ipsumLength]').val(250);
				break;
		}
	});
	$('input[name=ipsumLength]').keyup(function(e){
		if(e.keyCode==13) make_the_ipsum();
	});

	
});

function make_the_ipsum() {

	var ipsum = "";
	var word_count = 0;
	var ipsum_length = parseInt($('input[name=ipsumLength]').val()); // length of the ipsum
	var ipsum_type = $('input[name=lengthType]:checked').val(); // length of the ipsum



	switch(ipsum_type){
		case 'para':
			for(i=0; i < ipsum_length; i++) {
				var quotes = gimme_quotes();
				ipsum += '<p>'+quotes.splice(0,7).join(' ')+'</p>';
			}

			break;
		case 'char':

			while ( ipsum.length < ipsum_length ) {
				var quotes = gimme_quotes();
				if(quotes.length > 0) {
					ipsum += quotes.pop() + ' ' ;
				} else {
					break;
				}
			}
			ipsum = ipsum.substr(0,ipsum_length); // limit to requested length

			break;



		default: // words
			while ( word_count < ipsum_length ) {
				var quotes = gimme_quotes();
				if(quotes.length > 0) { 
					ipsum += quotes.pop() + ' ' ;
					word_count = ipsum.split(' ', ipsum_length).length;
				} else {
					break;
				}
			} 

			// double check the length of your ipsum
			if (ipsum.length > ipsum_length) ipsum = ipsum.split(' ', ipsum_length).join(' ');
		}


	$('code').html(ipsum);

}
function gimme_quotes(){
	var quotes = quote_lib.slice(0);
	quotes.sort( function() { 
		return 0.5 - Math.random();
	});
	return quotes;
}







window.quote_lib = [
"Sun-tan lotion is good for me, you protect me, tee hee hee.",
"Nudie magazine day!",
"What's today? October.",
"It's too damn hot for a penguin to be walkin around here.",
"Call the zoo!",
"oooh, that boy's a fine piece of work alright, haha, he is a fine piece of ass too.",
"Shampoo is better.",
"No, conditioner is better.",
"Stop looking at me swan.",
"This guy can stay in my room, I can tell you that much.",
"Sorry daddy.",
"tela-hoo-hoo, zabba doo.",
"Jack Nicholson now? Or 1974?",
"Here's a nice piece of shit.",
"He called the shit poop!",
"Don't tell me my business devil women.",
"Don't put it out with your boots ted.",
"It's poop again!",
"He called the shit poop.",
"rock, R-O-K?",
"1st grade through 12th grade, all over again.", 
"Where's my snack-pack!",
"I thought I was your snack-pack?",
"Back to school, Back too School...",
"I drew the duck blue",
"Thank you very much Ms.Lippy!",
"Well, Alright...",
"Scotty likes beans.",
"You got a mis-shaped head.",
"The Puppy Who Lost His Way.",
"You get your ass out there and you find that fucking dog!",
"You gotta pet, you gotta responsibility.",
"O'Doyle rules.",
"I think Crazy Carl is right.",
"Actually I, uh, stole this shirt from Frank.",
"What? Are you some damned moron?",
"Now you're all in big, BIG trouble.",
"Have some more sloppy joes.",
"I made 'em extra sloppy for yous.",
"I know how yous kids like 'em sloppy.",
"Lady, you're scaring us.",
"I think Billy and his girlfriend are playing water polo or something.",
"Hey, maybe they're playing Marco Polo. Marco.",
"Polo. Jeez, that was a great game.",
"Who would you rather bone, Meg Ryan or Jack Nicholson?",
"Okay, a simple wrong would've done just fine.",
"I swear to God I'm sick. I can't go to school.",
"If you're gonna stay home today, you can help me shave my armpits.",
"Oh my God. I'll go to school.",
"So what's it like, being back in school?",
"When I graduated first grade, all my dad did was tell me to get a job.",
"Oh my God, Old Man Clemens hates shit.",
"Judas Priest, Barbara, it's one of those flaming bags again.",
"Don't put it out with your boots, Ted.",
"I'll get you damn kids for this. You're all gonna die.",
"No milk will ever be our milk.",
"If there is any attempt for either contestant to cheat, especially with my wife, who is a dirty, dirty, tramp, I am just gonna snap.",
"I ate some Triscuit crackers in the car, you should have had some.",
"Well, sorry doesn't put the Triscuit crackers in my stomach now, does it Carl?",
"Hey look everybody, Billy peed his pants.",
"Of course I peed my pants, everyone my age pees their pants.",
"You ain't cool, unless you pee your pants.",
"Hey look, Ernie peed his pants too. Alright!",
"If peeing in your pants is cool, consider me Miles Davis.",
"That was the grossest thing I've ever heard in my life. Let's Go.",
"Where's my snack pack?",
"You got a banana, you don't need no snack pack.",
"I'll tell you who it was, it was that damned Sasquatch.",
"Gee, I can't wait till I get to hike school.",
"You know I like Snack Pack. Why can't you just give me a Snack Pack?",
"I dare you to touch her boobs.",
"Touch her boobs? That's assault brotha. You double dare me?",
"Oh, I'm sorry! Damn bus driver drives like an animal!",
"That's alright, Billy, why don't you go back and sit now?",
"That... tit... accident...", 
"Hey, I dare you to throw your sandwich at the bus driver.",
"I'll turn this damn bus around!",
"That'll end your precious field trip pretty damn quick huh! Little shit!",
"That's quacktastic.",
"Wow, Miss Lippy, that's great. What do you think of that Mr. Blue Duck?",
"You know something? YOU SUCK!",
"Man, I'm glad I called that guy.",
"Donkey Kong sucks.",
"I disagree, it's a very good game, but I think Donkey Kong is the best game ever.",
"Mortal Kombat, on Sega Genesis, is the best video game ever.",
"Billy likes to drink soda, Miss Lippy's car is green.",
"Live or stuffed, preferably stuffed for safety sake, and three, we bring back some of those ice cubes and switch it over to a pitching wedge",
"How 'bout you Sideburns? You want some of this milk?",
"I'd rather have a beer.",
"I bet that snack pack is pretty good huh?",
"You know how badly I could beat you, right?",
"OW! Your tearing my ear off.",
"I've been physically abused in the ear.",
"I see your lips moving but I can't make out the words.",
"Oh Veronica Vaughn so hot want to touch the heiney.",
"Kid can't even read.",
"Eric, is pregnant?",
"Oh, gross,did you see that guys balls?",
"Bunt. B-U-N-T, in perfect cursive. Any more brain busters?",
"Rirruto?",
"That's not fair! Rizzuto's not a word!",
"Is he going to have a stupid party every time he passes a grade?",
"Hey, you wanna go feed that donkey some beer? Get it all messed up?",
"Are you in 'Loser Denial'?",
"Chlorophyll? More like BOREophyll.",
"Eric drinks his own pee.",
"Mom, that's Billy. He's in my class. I heard he's retarded or something.",
"Sixty nine!",
"That is correct. The Magna Carta.",
"Spanish Armada.",
"That Veronica Vaughn is one piece of ace.",
"Everybody on, good, great, grand, wonderful.",
"Mr. Madison, the Industrial Revolution changed the face of the modern novel forever.",
"Knibb High football rules!",
"Smiley.",
"Hello? Is this Danny? Danny McGrath?",
"The Danny McGrath who graduated from Knibb Highschool in 1984?",
"In June 1983 he sat on some guy's head and killed him.",
];