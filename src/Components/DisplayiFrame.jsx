import React from 'react';
import { Slide } from 'react-slideshow-image'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: true
  
  }

function DisplayiFrame({ state, showSlide }) {

return(
    <div>
        <Slide {...properties}>
            {
                state.map(obj => {return <iframe src={obj.url} title={obj.id} />})
            } 
        </Slide>
        <p>Comme vous le savez, Kenny's Travel Agency est une agence de voyage local et "En local" si on peut se permettre, car elle vous propose de voyager depuis votre canapé. Vous êtes ici très certainement parce que vous n'avez pas d'argent. Soyez conscient que les gens qui en ont, voyage vraiment ! Mais vous, comme Kenny, etes pauvre... et donc vous ne pouvez que trop peu voir le monde... C'est pour cela que nous existons. En revanche, nous estimons que voir le monde, gratuitement et sans bouger quand on est pauvre est trop facile ! Par conséquent, nous vous proposons un voyage à la hauteur de votre compte banque (si toutefois vous en avez un...): un voyage complètement naze avec des images du monde pas ouf non plus...(vous avez cru quoi ?). Etre pauvre ne veut pas dire ne pas avoir de chance. C'est pourquoi de temps en tant vous pourrez profiter de belles images et de lieux luxueux que jamais vous pourrez voir de votre vivant (On est réaliste mais pas sans-coeur non plus !) A passer votre temps à lire ce texte, vous avez pas forcément vu les images.Sachez que vous pouvez recommencer autant que vous voulez, on le dira jamais assez : c'est gratuit ! Alors profitez de votre voyage sous une douce musique issu du célèbre film "Forest Gump", ce personnage de fiction qui disait : "la vie c'est comme une boite de chocolat, on sait jamais sur lequel on va tomber" mais autant faut-il pour ca avoir un boite de chocolat...</p>
        <audio controls src="..
        /Audio/forrest-gump.mp3"></audio>
        <button type="reset" onClick = {showSlide}>Quitter</button>
    </div>

)
    
}

export default DisplayiFrame;