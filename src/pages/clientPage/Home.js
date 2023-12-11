import CardBooks from "../../components/cards/CardsBooks";
import senhor_dos_aneis from "../../imgs/senhor-dos-aneis.png"
import harry_potter_1 from "../../imgs/harry-potter-e-a-pedra-filosofal.jpg"
import harry_potter_2 from "../../imgs/hary-potter-e-a-camara-secreta.jpg"
import harry_potter_3 from "../../imgs/harry-potter-e-o-prisioneiro-de-azkaban.jpg"
import it_a_coisa from "../../imgs/it-a-coisa.jpg"
import minha_vida_fora_de_serie_2 from "../../imgs/minha-vida-fora-de-serie-2.jpg"
import minha_vida_fora_de_serie_3 from "../../imgs/minha-vida-fora-de-serie-3.jpg"
import a_empregada from "../../imgs/a-empregada.jpg"
import javaScript from "../../imgs/javaScript-o-guia-completo.jpg"
import o_senhor_dos_aneis_a_sociedade_do_anel from "../../imgs/o-senhor-dos-aneis-a-sociedade-do-anel.jpg"


const Home = () => {
    return (

        <main>
            <CardBooks src={senhor_dos_aneis} title="O Senhor dos Aneis" subtitle="A história narra o conflito contra o mal que se alastra pela 
        Terra-média, através da luta de várias raças - Humanos, Anãos, Elfos, Ents e Hobbits - contra Orques, para evitar que o 
        'Anel do Poder' volte às mãos de seu criador Sauron, o Senhor Sombrio."  price="79,90" />

            <CardBooks src={harry_potter_1} title="Harry Potter e a Pedra Filosofal" subtitle="Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo."
                price="54,90" />

            <CardBooks src={harry_potter_2} title="Harry Potter e a Câmara secreta" subtitle="Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts."
                price="53,90" />

            <CardBooks src={harry_potter_3} title="Harry Potter e o Prisioneiro de Azkan" subtitle="As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, 'Harry Potter e o prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry."
                price="55,90" />

            <CardBooks src={it_a_coisa} title="IT: A coisa" subtitle="Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.

            urante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.

            Quase trinta anos depois, o grupo volta a se encontrar. Mike, o único que permaneceu em Derry, dá o sinal ― uma nova onda de terror tomou a pequena cidade. É preciso unir forças novamente. Só eles têm a chave do enigma. Só eles sabem o que se esconde nas entranhas de Derry. Só eles podem vencer a Coisa.

            “Mesmo depois de tantos anos, o público continua obcecado por IT. Ficamos obcecados porque todos temos medos. Todos temos algo que nos assusta, sejam palhaços e aranhas ou coisas que se escondem em um lugar muito mais profundo de nossa mente. Este livro fala com todo mundo. É o romance mais assustador de King, e duvido que isso vá mudar” ― The Guardian"
                price="88,90" />

            <CardBooks src={minha_vida_fora_de_serie_2} title="Minha Vida Fora de Série - 2° Temporada" 
            subtitle="Na 2ª temporada de Minha vida fora de série, Priscila, agora com 16 anos, começa a lidar com questões mais sérias da adolescência: A proximidade do vestibular e com ele todos os receios dessa fase, amizades que parecem sólidas e que de repente se perdem, o aprendizado de que um namoro tem que ser constantemente cuidado para não se desgastar. Ela descobre que atos sem pensar, que parecem estar esquecidos no passado, podem marcar irreversivelmente o presente."  
        price="46,90" />

            <CardBooks src={minha_vida_fora_de_serie_3} title="Minha Vida Fora de Série - 3° Temporada" 
            subtitle="Três anos se passaram desde a 2ª temporada de Minha vida fora de série. Priscila, agora com 19 anos, percebe que tem que deixar a adolescência para trás e começar a lidar com as responsabilidades da vida adulta: o namoro com Rodrigo, cada vez mais sério; o início da faculdade, que ela ainda tem dúvidas se escolheu a certa; as novidades na família, que mais uma vez transformam seu cotidiano. Mas, como nos seriados que tanto ama, ela também vai passar por muitas reviravoltas e confusões, e descobrir que alguns acontecimentos de episódios passados podem afetar os atuais. Não perca mais esta temporada imperdível da vida fora de série de Priscila."  
        price="44,90" />

            <CardBooks src={a_empregada} title="A empregada" 
            subtitle="Todos os dias, Millie limpa a casa de Nina e Andrew Winchester de cima a baixo. Pega a filha deles na escola. Prepara refeições deliciosas para a família toda antes de poder se recolher e enfim comer o próprio jantar, sozinha em seu quarto minúsculo e claustrofóbico no sótão.

            Quando Nina passa a sujar todos os cômodos de propósito só para assisti-la limpar, Millie tenta não perder a cabeça. Quando ela conta mentiras perturbadoras sobre a própria filha e tortura psicologicamente o marido, que parece mais e mais fragilizado, Millie tenta ignorar.
            
            Afinal, com seu passado problemático, ela tem mais é que agradecer por ter conseguido esse emprego.
            
            No entanto, ao olhar bem dentro dos lindos e doces olhos de Andrew e ver o sofrimento contido neles, Millie não consegue deixar de imaginar como seria ter a vida de Nina. O closet cheio de roupas, o carro elegante, o marido perfeito.
            
            Logo os Winchesters vão descobrir que não fazem a menor ideia de quem Millie é de verdade. Nem do que ela é capaz de fazer..."  
            price="18,90" />

            <CardBooks src={javaScript} title="javaScript: O Guia Completo" subtitle="Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor. Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo."  
        price="188,90" />

            <CardBooks src={o_senhor_dos_aneis_a_sociedade_do_anel} title="O senhor dos Aneis: A Sociedade do Anel" 
            subtitle="O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.

            A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo.
            
            O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado.
            
            A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel.
            
            Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto."  
        price="99,90" />

        </main>


    )
}

export default Home;