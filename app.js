let glossary = [
    {
        word: "Agile",
        definition: "Les méthodes de développement en approche agile visent la satisfaction réelle des besoins d’informatisation du client.Elles l’impliquent pendant tout le développement et permettent une grande réactivité à ses demandes.",
    },
    {
        word: "AJAX",
        definition: "AJAX est l’acronyme d'Asynchronous Javascript and XML. Il permet de construire des applications Web et des sites web dynamiques interactifs sur les postes clients en se servant de différentes technologies: JavaScript, CSS, JSON, XML, DOM.La combinaison de ces technologies permet d'améliorer la maniabilité et le confort d'utilisation des applications internet riches (abréviation RIA : Rich Interface Application).",
    },
    {
        word: "Application web",
        definition: "Une application web (aussi appelée web app de l’anglais) est une application manipulable grâce à un navigateur web.",
    },
    {
        word: "CMS",
        definition: "Content Management System : système de gestion de contenu. Un CMS est une solution facilitant la conception et la mise à jour de sites ou applications Web. Un CMS dispose de fonctionnalités fournissant une chaîne de publication pour mettre en ligne de l’information. Il sépare les opérations de gestion de la forme de celles du contenu, structure le contenu et facilite la gestion des utilisateurs et de leurs droits.",
    },
    {
        word: "Composant",
        definition: "(Source Wikipédia du 17/05/2016) Un composant logiciel est un élément de base d'un système informatique plus complexe dans lequel les éléments sont organisés entre eux, rendent un service prédéfini et sont capables de communiquer entre eux ainsi qu’avec d'autres composants extérieurs. La programmation orientée composant a pris de l'ampleur avec le développement objet.",
    },
    {
        word: "CRUD",
        definition: "(Source Wikipédia du 21/12/2017) L'acronyme informatique anglais CRUD (pour create, read, update, delete) désigne les quatre opérations de base pour la persistance des données, en particulier le stockage d'informations en base de données. Plus généralement, il désigne les opérations permettant la gestion d'une collection d'éléments.",
    },
    {
        word: "CSRF",
        definition: "(Source Wikipédia du 07/09/2017) En sécurité informatique, le Cross-Site Request Forgery est un type de vulnérabilité des services d'authentification web. L’objet de cette attaque est de transmettre à un utilisateur authentifié une requête HTTP falsifiée qui pointe sur une action interne au site, afin qu'il l'exécute sans en avoir conscience et en utilisant ses propres droits.",
    },
    {
        word: "DOM",
        definition: "Document Object Model. Interface de programmation normalisée par le W3C permettant à des scripts d'examiner et de modifier le contenu du navigateur web. Les objets DOM peuvent représenter une fenêtre, un document, une phrase, un style...",
    },
    {
        word: "ECMAScript",
        definition: "ECMAScript est un ensemble de spécifications mises en œuvre dans différents langages de script. Ces spécifications sont standardisées par l’organisation ECMA International.",
    },
    {
        word: "FAQ",
        definition: "Frequently Asked Questions. Liste des questions les plus posées par les utilisateurs avec les réponses associées. Évite l’engorgement des sites d’appel.",
    },
    {
        word: "Feuille de style",
        definition: "(Source Wikipédia du 31/12/2017) Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C).",
    },
    {
        word: "Framework",
        definition: "Appelé en français cadre d’applications, c’est un ensemble de classes d’objet, utilisables pour créer des applications informatiques. Le framework fournit au développeur des objets d’interface (bouton, menu, fenêtres, boîtes de dialogue), des objets de service (collections, conteneurs) et des objets de persistance (accès aux fichiers et aux bases de données) prêts à l’emploi. Le développeur peut donc s’appuyer sur ces classes et se concentrer sur les aspects métier de son application.",
    },
    {
        word: "Interface utilisateur web (ou page web) dynamique ou statique",
        definition: "(Source Wikipédia 31/01/2017) Une page web dynamique est une page web générée à la demande, par opposition à une page web statique. Le contenu d'une page web dynamique peut donc varier en fonction d'informations (heure, nom de l'utilisateur, formulaire rempli par l'utilisateur, etc.) qui ne sont connues qu'au moment de sa consultation. À l'inverse, le contenu d'une page web statique est, à priori, identique à chaque consultation.",
    },
    {
        word: "Gabarit de mise en page",
        definition: "Un gabarit de mise en page est un modèle de mise en page où l'on peut placer des images, du texte, et tout autre contenu multimédia. Il permet de distinguer le fond, c’est à dire l’information, de la forme, c’est-à-dire la présentation. Il agit comme un modèle dans lequel seuls certains éléments sont modifiables.",
    },
    {
        word: "HTTP",
        definition: "(Source Wikipédia du 19/12/2017) HyperText Transfer Protocol, littéralement « protocole de transfert hypertexte » est un protocole de communication client-serveur. Les clients HTTP les plus connus sont les navigateurs Web permettant à un utilisateur d'accéder à un serveur contenant les données.",
    },
];

const button = document.querySelector("button");
const card = document.querySelector(".card");
const textFront = document.querySelector(".card__front h2");
const textBack = document.querySelector(".card__back p");

var previousCardIndex = -1;

const getRandomInt = (max) => {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

const drawCard = () => {
    let index = getRandomInt(glossary.length - 1);
    while (index === previousCardIndex) {
        index = getRandomInt(glossary.length - 1);
    }
    textFront.textContent = glossary[index].word;
    textBack.textContent = glossary[index].definition;
    previousCardIndex = index;
}

button.addEventListener("click", drawCard);

drawCard();