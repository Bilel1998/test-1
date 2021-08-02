import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Choice from '../screens/choice'
import AgenceFormulaire from '../screens/agenceFormulaire'
import ParticulierFormulaire from '../screens/particulierFormulaire'
import home from '../screens/home'

const screens = {
    choice:{
        screen:Choice
    },
    agenceFormulaire:{
        screen:AgenceFormulaire
    },
    particulierFormulaire:{
        screen:ParticulierFormulaire
    },
    home:{
        screen:home
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer (HomeStack);