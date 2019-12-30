import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PacientesPage from './PacientesPage';
import PacienteForm from '../components/PacienteForm'
import PacientePage from './PacientePage';
import TabsNavigation from './TabsNavigation';
import { palette } from '../theme';




const tema = {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: palette.primary.main, 
            borderBottomWidth: 0
        },
        headerTintColor: palette.primary.contrastText,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

let rutas = {



    home: {
        screen: TabsNavigation,
        navigationOptions: {
            title: 'Pacientes',
        },

    },
    
    pacientes: {
        screen: PacientesPage,
        navigationOptions: {
            title: 'Pacientes'
        }
    },
   

    paciente: {
        screen: PacientePage,
        navigationOptions: {
            title: 'Paciente'
        }
    },

}

const AppNavigator = createStackNavigator(rutas, tema);


export default createAppContainer(AppNavigator);


