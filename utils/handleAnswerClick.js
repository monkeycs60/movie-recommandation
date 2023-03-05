import { handleMood1,
	handleMood2,
	handleMood3,
	handleMood4,
} from './onAnswerClickFunctions/handleMood';
import { handleHate1,
	handleHate2,
	handleHate3,
	handleHate4,
} from './onAnswerClickFunctions/handleHate';
import { handleExcitement1,
	handleExcitement2,
	handleExcitement3,
	handleExcitement4,
} from './onAnswerClickFunctions/handleExcitement';
import { handleEra1,
	handleEra2,
	handleEra3,
	handleEra4,
} from './onAnswerClickFunctions/handleEra';
import { handleSearch1,
	handleSearch2,
	handleSearch3,
	handleSearch4,
} from './onAnswerClickFunctions/handleSearch';
import { handleAvoid1,
	handleAvoid2,
	handleAvoid3,
	handleAvoid4,
} from './onAnswerClickFunctions/handleAvoid';

const handleAnswerClick = (answer, dispatch) => {
	// appel de la fonction appropriée en fonction de la réponse sélectionnée
	switch (answer) {
	case 'Au fond du trou':
		handleMood1(dispatch);
		break;
	case 'Besoin d\'action':
		handleMood2(dispatch);
		break;
	case 'Envie de rire':
		handleMood3(dispatch);
		break;
	case 'Soif d\'inconnu':
		handleMood4(dispatch);
		break;
	case 'L\'année 1996':
		handleHate1(dispatch);
		break;
	case 'Les films romantiques':
		handleHate2(dispatch);
		break;
	case 'Ta belle-mère':
		handleHate3(dispatch);
		break;
	case 'Le cinéma français':
		handleHate4(dispatch);
		break;
	case 'Le cinéma hong-kongais':
		handleExcitement1(dispatch);
		break;
	case 'Les années 2000':
		handleExcitement2(dispatch);
		break;
	case 'Les comédies à l\'eau de rose':
		handleExcitement3(dispatch);
		break;
	case 'Les valeurs sûres':
		handleExcitement4(dispatch);
		break;
	case 'Années 1980':
		handleEra1(dispatch);
		break;
	case 'Années 2010':
		handleEra2(dispatch);
		break;
	case 'Années 1990':
		handleEra3(dispatch);
		break;
	case 'Cinéma très récent':
		handleEra4(dispatch);
		break;
	case 'La crème de la crème':
		handleSearch1(dispatch);
		break;
	case 'Le dépaysement':
		handleSearch2(dispatch);
		break;
	case 'Un documentaire':
		handleSearch3(dispatch);
		break;
	case 'La nostalgie':
		handleSearch4(dispatch);
		break;
	case 'D\'avoir peur':
		handleAvoid1(dispatch);
		break;
	case 'De te cultiver':
		handleAvoid2(dispatch);
		break;
	case 'De regarder le même film que ton petit cousin':
		handleAvoid3(dispatch);
		break;
	case 'De répondre à cette question':
		handleAvoid4(dispatch);
		break;
	default:
		break;
	}
	console.log(`L'utilisateur a sélectionné la réponse : ${answer}`);
};

export default handleAnswerClick;