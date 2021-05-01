var Twit = require("twit");

require("dotenv").config();

const Bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
});

var words = [
    'Carta do cachorro ao seu dono\n\n"Não tenho nada a oferecer para o senhor, apenas carinho e amor."',
    'Carta do filho ao seu pai\n\n"Eu sei que sou um gasto a mais para o senhor, mas lavei a louça. \nAinda sou pequeno, mas um dia eu pagarei tudo.\n Te amo."',
    'Carta do devedor ao seu credor\n\n"Eu não tenho dinheiro, por favor, não me despeje, meus filhos precisam de um lugar para ficar."',
    'Carta do boneco ao seu criador\n\n"Você não me criou, porque quer mandar em mim?\nEu não seguirei as tuas ordens."',
    'Carta do criador ao seu boneco\n\n"Eu te criei. Eu só quero seu bem. \nPorém, deixarei você ser livre."',
    'Carta do rei deposto ao seu povo\n\n"Quando os outros povos disserem que te odeiam, não volte chorando para mim."'
];

function BotAction() {
    var oneWord = words[Math.floor(Math.random() * words.length)];

    Bot.post(
    
    'statuses/update', 
    
    { status: oneWord }, 
    
    function(err, data, response) {
        if (err) {
            console.log("Não foi possível por o Bot em ação: " + err);
            return false;
        }

        console.log(data);
    })

    var oneWord = words[Math.floor(Math.random() * words.length)];
}

BotAction();