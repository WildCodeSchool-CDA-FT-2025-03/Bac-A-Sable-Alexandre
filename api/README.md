## DOC Route
    GET
    - /api/repos/
        * Visu de tous les repos
        * Gestion des filtres (isPrivate, limite, fields)
    - /api/repos/:IdRepo
        * Visu d'un respo
    - /api/repos/:IdRepo/url
        * Visu URL d'un repo

    POST 
    - /api/repos/
        * Add new repo
    
    DELETE 
    - /api/repos/:IdRepo
        * Suppression d'un repo
    - /api/repos/?isPrivate=true
        * Suppression de tous les repos isPrivate

    PUT
    - /api/repos/:IdRepo
        * Modifier un Repo 