function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
       const articles = document.getElementById('articles');
       let listArticles = data.journal.articles;
        console.log(articles);
  
        listArticles.forEach(article => {
            let image_url = article.image_url;
            let titre = article.titre;
            let date = article.date;
            let theme = article.theme

            let card = `<div class="articles">
                <img class="articles-image" src="${image_url}" alt="${titre} ">
                <div class"texte-articles">
                <ul class="ul-articles">
                <li><h2>${titre}</li>
                <li><h4>${date}• ${theme}</h4></li>
                <li><button class="button-lire"><a href="#">Lire l'article</a></button></li>
                </ul>
                </div>
            </div>`;
          articles.insertAdjacentHTML("beforeend", card );
        });

        const auteurs = document.getElementById('prenom');
       let listAuteurs = data.journal.auteurs;
        console.log(listAuteurs);
  
        listAuteurs.forEach(auteur => {
            let image = auteur.image;
            let prenom = auteur.prenom;
            let typeExperience = auteur.typeExperience;
            let presentation = auteur.presentation;
            console.log(listAuteurs);
            
            let cardNom = `<div class="prenom">
            <img class="auteurs-image" src="${image}">
            <h4>${prenom}</h4>
            <p>${typeExperience}<br>${presentation}</p>
            </div>`
            
          auteurs.insertAdjacentHTML("beforeend", cardNom );
        });

        const themes = document.getElementById('themes');
       let listThemes = data.journal.themes;
        console.log(listThemes);
  
        listThemes.forEach(theme => {
            let nom = theme.nom;
            let description = theme.description;
            console.log(listThemes);
            
            let cardThemes = `<div class="themes">
         <h4>${nom}</h4>
         <p>${description}</p>
       </div>`
            
          themes.insertAdjacentHTML("beforeend", cardThemes );
        });

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici