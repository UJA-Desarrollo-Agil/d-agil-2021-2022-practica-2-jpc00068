// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>La última llamada</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Esta historia comienza con nuestro personaje Richi, el cual, \
		se encontraba en su habitación un sábado por la tarde totalmente\
		desesperado por el gran aburrimiento. </p>\
        \
        <p>Richi cansado de estar encerrado decide prepararse para salir\
		a la calle, cuando le suena el móvil y con una risa tímida sabía\
		perfectamente quién le estaría llamando, sus amigos en especial\
		su mejor amigo Tano, pero su madre días antes le había prohibido\
		salir por su mal comportamiento en casa y llegar tarde el pasado sábado.\
		Entonces en la mente de Richi hay dos situaciones <a href='opc1'>salir y disfrutar </a>\
		una nueva vivencia con sus amigos que nunca olvidaría ó <a href='opc2'>quedarse castigado </a>\
		y no darle más disgustos a su madre</p>\
        \
		"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	
	opc1: new undum.SimpleSituation(
        "<h1>Salir y disfrutar</h1>\
		<img src='media/games/tutorial/woodcut3.png' class='float_right'>\
		<p>Obviamente Richi no se iba a quedar encerrado y mas cuando\
		si sus amigos lo han llamado. Richi se prepara para salir, se viste\
		coge sus cosas; móvil, cartera, mechero.., algo de comer y surge el problema.\
	    Si sale por la puerta le puede ver su madre, entonces ¿por dónde sale?\
		<a href='opc3'>por la puerta </a>\ y se la juega <a href='opc4'>por la ventana </a>\
		 ya que vive en un segundo y no hay mucha caida. </p>\
		"
    ),
	
	opc2: new undum.SimpleSituation(
        "<h1>Quedarse castigado</h1>\
		<p>Es raro que Richi hago esto pero decide no salir, consiguiendo asi\
		sacarle una sonrisa a su madre y un beso, que aunque este no lo aprecie\
		en estos momentos cuando se haga mas grande le tendrá más aprecio.\
		Esto hace que la desesperación y enfado aumente...</p>\
		<center><img src='media/games/tutorial/woodcut2.png'></center>\
		",
		{
		enter: function(character, system, to) {
                system.animateQuality(
					'frustracion', character.qualities.frustracion+50
                );
            }
		}
    ),
	
	opc3: new undum.SimpleSituation(
        "<h1>Por la puerta</h1>\
		<p>Richi sin ganas de escaparse por la ventana decide jugarselo todo a una\
		carta y intenta salir por la puerta. Sigilosamente sale de la cocina al pasillo\
		y poco a poco va pasando por la puerta del salón, cuando al estar enfrente de la puerta\
		le toca alguien el hombro, su madre se encontraba justo detrás del él. Está con cara de enfada\
		le grita, le suelta un tortazo y le explica que está castigado, enviandolo a su cuarto.\
		Provocando un enfado en Richi que no lo aguanta y se queda en la cama llorando.</p>\
		<img src='media/games/tutorial/woodcut4.png' class='float_right'>\
		",
		{
		enter: function(character, system, to) {
                system.animateQuality(
					'frustracion', character.qualities.frustracion+35
                );
            }
		}
		
    ),
	
	opc4: new undum.SimpleSituation(
        "<h1>Por la ventana</h1>\
		<p>Es la mejor opción para no quedarse en su cuarto, debido a que su madre\
		está en el salón y lo hubiera pillado salir. Richi procede a saltarse por la\
		ventana pero en este caso se hace un poco de daño, ya que al caer resbala, pero\
		queda en una simple rozadura. Por fin Richi logra salir a la calle después \
		de todo el día aburrido, y como no sus amigos le sorprenden con un plan inolvidable\
		donde tiene adrenalina, fiesta y encuentra el amor de su vida.</p>\
		<img src='media/games/tutorial/woodcut5.png' class='float_right'>\
		",
		{
		enter: function(character, system, to) {
                system.animateQuality(
					'salud', character.qualities.salud-20
                );
            }
		}
    ),
    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    salud: new undum.IntegerQuality(
        "salud", {priority:"0001", group:'stats'}
    ),
    frustracion: new undum.NumericQuality(
        "frustracion", {priority:"0002", group:'stats'}
    )
    /*luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='enfado, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )*/
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.salud = 100;
    character.qualities.frustracion = 0;
    /*character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;*/
    system.setCharacterText("<p>Características Richi.</p>");
};
