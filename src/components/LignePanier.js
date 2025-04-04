import React, {useState} from 'react';

function LignePanier({id_panier, reloadPanier}) {

    const [ligne, setLigne] = useState(null);
    const [recuper, setRecuper] = useState({ligne: false});

    // fonction sans useEffect API recuperation ligne du panier d'ID : id_panier
    // si appel fonction : mettre recuper.ligne = true

    if (!recuper.ligne) {
        // Appel fonction recup
    }

    return (
        <div>
            {ligne && recuper.ligne ? (
                "Appel fonction affiche lignes avec un .map"
            ) : (
                ""
            )}
        </div>
    );
}

export default LignePanier;